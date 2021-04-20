<template>
<div >

<!--新闻页面列表区域  -->
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">

        <img class="mui-media-object mui-pull-left" :src="item.img_url" alt="">
        <div class="mui-media-body">
          <a href=""><h2 class="text-secondary">{{item.title}} </h2></a>

          <h3>{{item.zhaiyao}}</h3>
          <p class='mui-ellipsis text-primary'>
            <span>发表时间：{{ item.add_time | dataFormat }}</span>
            <span>点击次数：{{item.click}}次</span>
          </p>
        </div>

    </li>


  </ul>
</div>
</template>

<script>
export default {
name: "NewsList.vue",
  data(){
  return{
    newsList:[]
  }
  },
  methods:{
  getNewsList(){
    //获取新闻列表数据
    this.$http.get('http://127.0.0.1:8899/api/getnewslist').then(result=>{
      if(result.body.status===0){
        this.newsList=result.body.message
      }else{
        Toast({
          message:'获取新闻列表数据失败'
        })
      }
    })
  }
  },
  created() {
  this.getNewsList()
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{

    li{
      h3{
        font-size: 18px;
      }
      .mui-ellipsis{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
      }

    }
  }

</style>
