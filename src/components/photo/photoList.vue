<template>
  <div>
    <!-- 顶部滑动条区域-->

    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
           class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id===0?'mui-active':'']" href="#" data-wid="tab-top-subpage-1.html"
          v-for="item in imagesList" :key="item.id" @click="getImage(item.id)"
          >
              {{item.title}}
          </a>

        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/homePage/photoInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info bg-transparent">
          <h1 class="info-title text-primary">{{item.title}}</h1>
          <div class="info-body text-secondarys">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//导入mui.min.js
import mui from '../../lib/mui/js/mui.min.js';
//初始化滑动控件
mui('.mui-scroll-wrapper')
  .scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });

export default {
  name: 'photoList.vue',
  data() {
    return {
      imagesList: [],
      list:[],
    };
  },
  methods: {
    getImagesCategory() {
      this.$http.get('http://127.0.0.1:8899/api/getimgcategory')
        .then(result => {
          if (result.body.status === 0) {
            result.body.message.unshift({ 'title': '全部', 'id': 0 });
            this.imagesList = result.body.message;

          } else {
            Toast({
              message: '获取图片分类数据失败'
            });
          }
        });
    },
    getImage(cateId){
      this.$http.get('http://127.0.0.1:8899/api/getimages/'+cateId).then(result=>{
        if(result.body.status===0){
          this.list=result.body.message
        }else{
          Toast({
            message:'获取图片列表数据失败'
          })
        }
      })
    }
  },
  created() {
    this.getImagesCategory();
    this.getImage(0);
  },
  mounted() {
    mui('.mui-scroll-wrapper')
      .scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y
}

.photo-list{
  list-style: none;
  margin: 0;
  padding-bottom: 0;
  padding: 10px;
  li{
    position: relative;
    box-shadow: 0 0 9px #999;
    background-color: white;
    text-align: center;
    margin-bottom: 10px;

    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    img{
     width: 100%;
      vertical-align: center;
    }
    .info{
      position: absolute;
      bottom: 0;
      text-align: left;
      max-height: 184px;
      .info-title{
        font-size: 14px;
      }
      .info-body{
        font-size: 13px;
      }
    }

  }
}
</style>
