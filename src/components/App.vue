<template>
  <div class="container-fluid">
 <!--header区域-->
    <header id="header" class="mui-bar mui-bar-nav">
      <a style="text-decoration: none" title="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="this.$router.go(-1)"></a>
      <h1 class="mui-title text-primary" >
        <span class="header-title">乐淘淘购物网</span></h1>
    </header>
<!--content区域  -->
<transition>
  <router-view></router-view>
</transition>
<!-- tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/homePage" class="mui-tab-item-zj mui-active" >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item-zj" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopCart" class="mui-tab-item-zj" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item-zj" href="#tabbar-with-map">
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

  overflow-x: hidden;
  padding-top: 40px;
  padding-bottom: 50px;


 .header-title{
   font-size: 40px;
 }
.navbar{
  z-index: 99;
  height: 40px;
  display: flex;
  justify-content: center;


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
.mui-bar-tab .mui-tab-item-zj.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-zj {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-zj .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zj .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
