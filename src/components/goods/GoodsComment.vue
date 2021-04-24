<template>
<div>
  <cmtbox :id="id"></cmtbox>
</div>
</template>

<script>
import cmtbox from '../sub_components/Comment.vue'
export default {
  name: 'GoodsComment.vue',
  data(){return{
    id:this.$route.params.id,
  }},
  components:{
    cmtbox
  }
};
</script>

<style scoped>

</style>
