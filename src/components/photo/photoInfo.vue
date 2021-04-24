<template>
  <div class="photoInfo-container">
    <h3 class="text-dark">{{photoInfo.title}}</h3>
    <p class="sub-title">
      <span>发表时间：{{photoInfo.add_time|dataFormat}}</span>
      <span>点击次数：{{photoInfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
     <div class="thumb">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
     </div>
    <!--  图片内容区域-->
    <div class="content text-primary" v-html="photoInfo.content">

    </div>

    <!-- 评论子组件 -->
    <com-box :id="id"></com-box>
  </div>
</template>

<script>
import Comment from '../sub_components/Comment.vue'
export default {
  name: 'photoInfo.vue',
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      slide1:[]
    };
  },
  methods: {
    getPhotoInfo() {
      this.$http.get('http://127.0.0.1:8899/api/getimageInfo/' + this.id)
        .then(result => {
          if (result.body.status === 0) {
            this.photoInfo = result.body.message[0];
          } else {
            Toast({
              message: '获取图片详情信息失败'
            });
          }
        });
    },
    getThumImages(){
      this.$http.get('http://127.0.0.1:8899/api/getthumimages/'+this.id)
      .then(result=>{
        if(result.body.status===0){
          result.body.message.forEach(item=>{
            item.msrc=item.src
            item.w=600
            item.h=400
          })
          this.slide1=result.body.message
        }else{
          Toast("获取缩略图失败")
        }

      })
    },
    handleClose () {
      console.log('close event')
    }
  },
  created() {
    this.getPhotoInfo();
    this.getThumImages()
  },
  components:{
    'com-box':Comment
  }
};
</script>

<style lang="scss" scoped>
.photoInfo-container{
  padding:3px;
  h3{
    text-align: center;
  }
  .sub-title{
    display: flex;
    justify-content: space-between;
  }
}
.thumb{
  text-align: center;
}
</style>
