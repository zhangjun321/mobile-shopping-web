<template>
  <div class="goods-list">
    <div class="card" style="width: 17rem;" v-for="item in goodsList" :key="item.id">
      <router-link :to="'/homePage/goodsInfo/'+item.id">
        <img :src="item.img_url" class="card-img-top" alt="2709b1a2d28339e6.jpg">
      </router-link>
      <div class="card-body bg-light">
        <h5 class="card-title text-dark">{{ item.title }}</h5>
        <a href="">
          <h6 class="sub-title text-muted">{{ item.zhaiyao }}</h6>
        </a>
        <div class="info">
          <p class="price text-danger">￥{{ item.sell_price }}</p>
          <p class="sell text-secondary">
            <span>热卖中</span>
            <span>剩余{{ item.stock_quantity }}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMoreGoods">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  name: 'GoodsList.vue',
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    };
  },
  methods: {
    getGoods() {
      this.$http.get('http://127.0.0.1:8899/api/getgoods?pageindex=' + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsList = this.goodsList.concat(result.body.message);
          } else {
            Toast('获取商品列表数据失败');
          }
        });
    },
    getMoreGoods(){
      this.pageIndex++;
      this.getGoods();
    }
  },
  created() {
    this.getGoods();
  },
};
</script>

<style lang="scss" scoped>
.goods-list {

  display: flex;

  flex-wrap: wrap;

  .card {

    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img.card-img-top {
      height: 270px;
      width: 100%;

    }


    .card-title {
      height: 55px;
    }

    h6.sub-title.text-muted {
      height: 45px;
      text-indent: 10px;
      padding-top: 15px;
    }

    .sell {
      display: flex;
      justify-content: space-between;

    }

  }

}
</style>
