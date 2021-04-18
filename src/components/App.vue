<template>
  <div class="container-fluid">
 <!--header区域-->
  <mt-header class="text-secondary title " fixed  title="乐淘淘购物网站"></mt-header>
<!--content区域  -->
<transition>
  <router-view></router-view>
</transition>
<!-- tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/homePage" class="mui-tab-item mui-active" >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopCart" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
name: "App.vue"
}
</script>

<style lang="scss" scoped>
.container-fluid{
  text-align: center;
  overflow-x: hidden;
  padding-top: 40px;

  .title{
    font-size: 40px;
  }
  .mint-header{



  }
}

.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
