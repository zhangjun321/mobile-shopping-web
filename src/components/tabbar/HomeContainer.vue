<template>
  <div class="app-container">
    <!--    轮播图区域-->
<carousel :swipeList="swipeList"></carousel>
    <!--    六宫格图标区域-->


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/homePage/newsList">
        <img src="../../images/news_img_01.png" alt="news.png">
        <div class="mui-media-body">新闻资讯</div>
      </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3"><router-link to="/homePage/photoList">
        <img src="../../images/share-image-02.png" alt="news.png">
        <div class="mui-media-body">图片分享</div>
      </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
        <router-link to="/homePage/goodsList">
        <img src="../../images/shop_image_03.png" alt="news.png">
        <div class="mui-media-body">商品购买</div>
      </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/homepage/vuex">
        <img src="../../images/images.png" alt="news.png">
        <div class="mui-media-body">留言反馈</div>
      </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/goods.jpg" alt="news.png">
        <div class="mui-media-body">商品专区</div>
      </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/contact.jpg" alt="news.png">
        <div class="mui-media-body">联系我们</div>
      </a></li>
    </ul>
  </div>

</template>

<script>
import { Toast } from 'mint-ui';
import carousel from '../sub_components/Carousel.vue'

export default {
  name: 'HomeContainer',
  data() {
    return {
      swipeList: [],//存放轮播图数据的数组
    };
  },
  methods: {
    getSwipe() {
      //获取轮播图图片数据
      this.$http.get('http://127.0.0.1:8899/api/getlunbo')
        .then(result => {
          if (result.body.status === 0) {
            this.swipeList = result.body.message;

          } else {
            Toast({
              message: '获取图片数据失败！',
              iconClass: 'icon icon-success'
            });
          }
        });
    },

  },
  created() {
    this.getSwipe();
  },
  components:{
    carousel
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-bottom: 15px;
  text-align: center;


  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img {
      width: 160px;
      height: 160px;
    }
    .mui-media-body{
      font-size: 16px;
    };
  }

  ul.mui-table-view.mui-grid-view.mui-grid-9 {
    padding: 0 0;
    background-color: white;

  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
    height: 250px;
    width: 250px;


  }
}


</style>
