<template>
  <div class="info-container bg-light">
    <!--  顶部轮播区域-->
    <carousel :swipeList="carousel"></carousel>
    <!--    中间详情区域-->
    <div class="mui-card">

      <div class="mui-card-header">
        <h3 class="title">{{ goodsParams.title }}</h3>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="info">
            <div class="price">
              <p class="text-danger">销售价：￥{{ goodsParams.sell_price }}</p>
            </div>
            <div class="counter">
             <span>购买数量：

               <numbox @getCount="getSelectedCount" :max="goodsParams.stock_quantity">

             </numbox>

             </span>
            </div>
          </div>
          <div class="button">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
          </div>

        </div>
      </div>

    </div>

    <!--  ball  -->
    <transition
      @before-enter="beforeEnter"
      @enter="Enter"
      @after-enter="afterEnter"

    >
      <div class="ball" v-show="flag" ref="ball"></div>
    </transition>

    <!--    底部区域-->
    <div class="mui-card">

      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="goods-params">
            <p class="goods-no">商品货号： {{ goodsParams.goods_no }}</p>
            <p class="stock-quantity">库存情况： {{ goodsParams.stock_quantity }}</p>
            <p class="add-time">上架时间： {{ goodsParams.add_time | dataFormat }}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <br>
          <mt-button type="danger" size="large" plain @click="goComment(id)">发表评论</mt-button>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import carousel from '../sub_components/Carousel.vue';
import GoodsInfo_NumBox from '../sub_components/GoodsInfo_NumBox.vue';

export default {
  name: 'GoodsInfo.vue',
  data() {
    return {
      id: this.$route.params.id,
      carousel: [],
      goodsParams: {},
      flag: false,
      count:1,
    };
  },
  methods: {
    getCarousel() {
      this.$http.get('http://127.0.0.1:8899/api/getthumimages/' + this.id)
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item => {
              item.img = item.src;
            });
            this.carousel = result.body.message;
          } else {
            Toast('获取商品轮播图失败');
          }
        });
    },
    getGoodsParams() {
      this.$http.get('http://127.0.0.1:8899/api/goods/getinfo/' + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsParams = result.body.message[0];
          } else {
            Toast('获取商品参数数据失败');
          }
        });
    },
    goDesc(id) {
      this.$router.push({ name: 'goodsDesc', params: { id } });
    },
    goComment(id) {
      this.$router.push({ name: 'goodsComment', params: { id } });

    },
    addToCart() {
      this.flag = !this.flag;
    },
    beforeEnter(el) {
      const numBoxPosition = document.getElementById('test')
        .getBoundingClientRect();
      const xInit =numBoxPosition.left+(numBoxPosition.right - numBoxPosition.left)/2;
      const yInit =numBoxPosition.top+(numBoxPosition.bottom - numBoxPosition.top)/2 ;
      console.log(xInit+"xxxxxxx")
      console.log(yInit+"yyyyyyy")

      el.left="`${xInit}`px"
      el.top="`${yInit}`px"


      el.style.transform = "translate(0,0)";
    },
    Enter(el, done) {


      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge')
        .getBoundingClientRect();
      const xDistance = badgePosition.left - ballPosition.left;
      const yDistance = badgePosition.top - ballPosition.top;

      el.offsetWidth;
      el.style.transform = `translate(${xDistance}px,${yDistance}px)`;
      el.style.transition = 'all 1s cubic-bezier(.17,.67,.83,.67)';
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;

    },
    getSelectedCount(count){
      //当子组件调用该方法的时候把count值传给父组件
      this.count=count;
    }
  },
  created() {
    this.getCarousel();
    this.getGoodsParams();
  },
  components: {
    carousel,
    'numbox': GoodsInfo_NumBox,
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  overflow: hidden;

  .button {
    padding: 10px;
  }

  .mui-card-footer {
    display: block;
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 470px;
    left: 162px
  }


}
</style>
