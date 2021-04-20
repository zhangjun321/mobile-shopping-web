<template>
<div>
  <h3 class="card-title text-dark">{{ newsInfo.title }}</h3>
  <p class="card-subtitle text-primary">
    <span>发表时间：{{ newsInfo.add_time | dataFormat }}</span>
    <span>点击次数：{{newsInfo.click}}次</span>
  </p>
  <hr>

  <div class="content" v-html="newsInfo.content">

  </div>
  <!-- 评论区域 -->
  <comment_box :id="id"></comment_box>
</div>
</template>

<script>
import Comment from '../sub_components/Comment.vue'
export default {
  name: 'NewsInfo.vue',
  data(){
    return {
      id:this.$route.params.id,
      newsInfo:{},
    }
  },
  components:{
    'comment_box':Comment,
  },
  methods:{
    getNewsInfo(){
      this.$http.get('http://127.0.0.1:8899/api/getnew/'+this.id).then(result=>{
        if(result.body.status===0){
        this.newsInfo=result.body.message[0]
        }else {
          Toast({
            message:"获取新闻详细信息失败"
          })
        }
      })
    }
  },
  created() {
    this.getNewsInfo()
  }
};
</script>

<style lang="scss" scoped>

.card-title{
  text-align: center;
}
.card-subtitle{
  display: flex;
  justify-content: space-between;
}

</style>
