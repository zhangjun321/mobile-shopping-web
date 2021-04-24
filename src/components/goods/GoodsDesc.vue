<template>
  <div class="container">
    <div class="title text-primary">
      {{info.title}}
    </div>
    <hr>
    <div class="content text-dark" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDesc.vue',
  data() {
    return {
      info:{},
      id:this.$route.params.id,
    };
  },
  methods: {
    getInfo() {
      this.$http.get('http://127.0.0.1:8899/api/goods/getdesc/'+this.id)
        .then(result => {
          if (result.body.status === 0) {
          this.info=result.body.message[0]
          }
          else {
              Toast("获取商品图文介绍失败")
          }
        });
    }
  },
  created() {
    this.getInfo()
  }

};
</script>

<style lang="scss" scoped>
.container{

  .title{
    text-align: center;
    font-size: 18px;
    margin: 20px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }

}

</style>
