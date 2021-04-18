<template>
  <div class="app-container">
    <!--    轮播图区域-->
    <mt-swipe :auto="6000" >
      <mt-swipe-item v-for="item in swipeList" :key="item.url">
        <img :src="item.img" alt="swipe">
      </mt-swipe-item>
    </mt-swipe>
<!--    轮播图区域-->

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'HomeContainer',
  data(){
    return {
      swipeList:[],//存放轮播图数据的数组
    }
  },
  methods: {
    getSwipe(){
      //获取轮播图图片数据
      this.$http.get('http://127.0.0.1:8899/api/getlunbo').then(result => {
        if(result.body.status===0){
          this.swipeList=result.body.message;

        }else{
          Toast({
            message:'获取图片数据失败！',
            iconClass:'icon icon-success'
          })
        }
      })
    },

  },
  created() {
    this.getSwipe();
  }
};
</script>

<style lang="scss" scoped>
.app-container{

  .mint-swipe{
    text-align: center;
    height: 300px;
    .mint-swipe-item{

      &:nth-child(1){

      }
      &:nth-child(2){

      }
      &:nth-child(3){

      }
      img{
        width: auto;
        height: 100%;
      }
    }
  }
}

</style>
