<template>
<div>
  <mt-swipe :auto="6000">
    <mt-swipe-item v-for="(item,index) in swipeList" :key="index">
      <img :src="item.img" alt="swipe">
    </mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
export default {
  name: 'Carousel.vue',
  props:['swipeList']
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  text-align: center;
  height: 300px;

  .mint-swipe-item {

    &:nth-child(1) {

    }

    &:nth-child(2) {

    }

    &:nth-child(3) {

    }

    img {
      width: auto;
      height: 100%;
    }
  }
}
</style>
