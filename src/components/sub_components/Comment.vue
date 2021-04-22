<template>
  <div>

    <h3>发表评论</h3>
    <hr>


    <div class="form-floating" >
      <textarea class="form-control text-dark" placeholder="Leave a comment here" id="floatingTextarea"
      v-model="msg"
      ></textarea>
      <label for="floatingTextarea">Comments</label>
    </div>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentList">
        <div class="cmt-title text-secondary">
          第{{index+1}}楼 &nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat }}
        </div>
        <div class="cmt-body text-dark">
          {{item.content===undefined?"此用户啥都没说":item.content }}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMoreComments">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  name: 'Comment.vue',
  data() {
    return {
      pageIndex: 1,
      commentList: [],
      msg:'',

    };
  },
  methods: {
    getComment() {
      this.$http.get('http://127.0.0.1:8899/api/getcomments/' +this.id + '?pageindex=' + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
           this.commentList= this.commentList.concat(result.body.message);
          } else {
            Toast({
              message: '获取评论失败！'
            });
          }
        });
    },
    getMoreComments(){
      this.pageIndex++
      this.getComment();
    },
    postComment(){
      if(this.msg.trim().length===0){
       return  Toast("发表内容不能为空")
      }else {
        this.$http.post('http://127.0.0.1:8899/api/postcomment/'+this.id,{content:this.msg.trim()},{emulateJSON:true})
          .then(function (result){
             if(result.body.status===0){
               var cms={user_name:'Jack Pudge',add_time:Date.now(),content:this.msg.trim()}
               this.commentList.unshift(cms)
               this.msg=''
             }else{
                Toast("提交评论失败")
             }
          })

      }


    }
  },
  created() {
    this.getComment()
  },
  props: ['id'],
};
</script>

<style lang="scss" scoped>
textarea[data-v-2e739f96] {
  font-size: 24px;
  margin: 0;
}

.cmt-list {
  margin: 10px 0;

  .cmt-item {
    .cmt-title {
      font-size: 20px;
      line-height: 30px;
    }

    .cmt-body {
      font-size: 28px;
      text-indent: 2em;
      line-height: 30px;
    }
  }
}
</style>
