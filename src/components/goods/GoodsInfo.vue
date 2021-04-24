<template>
  <div class="info-container bg-light">
    <!--  顶部轮播区域-->
      <carousel :swipeList="carousel"></carousel>
    <!--    中间详情区域-->
    <div class="mui-card">
      <div class="mui-card-header">
        <h3 class="title">{{goodsParams.title}}</h3>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
         <div class="info">
           <div class="price">
             <p class="text-danger">销售价：￥{{goodsParams.sell_price}}</p>
           </div>
           <div class="counter">
             <span>购买数量：<numbox></numbox>

             </span>
           </div>
         </div >
         <div class="button">
           <mt-button type="primary" size="small">立即购买</mt-button>
           <mt-button type="danger" size="small">加入购物车</mt-button>
         </div>

        </div>
      </div>

    </div>


    <!--    底部区域-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
        <div class="goods-params">
          <p class="goods-no">商品货号： {{goodsParams.goods_no}}</p>
          <p class="stock-quantity">库存情况： {{goodsParams.stock_quantity}}</p>
          <p class="add-time">上架时间： {{goodsParams.add_time | dataFormat}}</p>
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
import carousel from '../sub_components/Carousel.vue'
import GoodsInfo_NumBox from '../sub_components/GoodsInfo_NumBox.vue'
export default {
  name: 'GoodsInfo.vue',
  data() {
    return {
      id: this.$route.params.id,
      carousel: [],
      goodsParams:{},
    };
  },
  methods: {
    getCarousel() {
      this.$http.get('http://127.0.0.1:8899/api/getthumimages/' + this.id)
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.forEach(item=>{
              item.img=item.src
            })
            this.carousel=result.body.message
          } else {
            Toast('获取商品轮播图失败');
          }
        });
    },
    getGoodsParams(){
      this.$http.get('http://127.0.0.1:8899/api/goods/getinfo/'+this.id)
      .then(result=>{
        if(result.body.status===0){
          this.goodsParams=result.body.message[0]
        }else{
          Toast("获取商品参数数据失败")
        }
      })
    },
    goDesc(id){
      this.$router.push({name:'goodsDesc',params:{id}})
    },
    goComment(id){
      this.$router.push({name:'goodsComment',params:{id}})

    },
  },
  created() {
    this.getCarousel();
    this.getGoodsParams()
  },
  components:{
    carousel,
    'numbox':GoodsInfo_NumBox,
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  overflow: hidden;

.button{
  padding: 10px;
}
.mui-card-footer{
  display: block;
}

}
</style>
