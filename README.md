# webpack-vue-routes

> develop a front page of shopping-website, this mobile app used the Vue framework, Mint-Ui,MUI

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
modify date: 2021/04/08


# 制作首页中的组件
  1 完成首页中的header区域，使用的是Mint-UI中的 Header组件
  2 制作底部的tabbar使用的是MUI的tabbar
  3 中间区域放置一个router-view展示匹配的路由组件
  4 使用购物车的图标需要导入MUI的扩展样式
     + import './lib/mui/css/icons-extra.css'
     + 导入font的样式

# 完成路由的改造和路由高亮
   1.1 安装vue-router
   1.2 在项目中导入路由 Import VueRouter from 'vue-router'
   1.3 使用路由模块 Vue.use(VueRouter)
   1.4 改造链接为<router-link to="/home">
   1.5 创建组件对象 HomeContainer.vue
   1.6 导入HomeContainer.vue 组件
   1.7 配置路由模块 var router = new VueRouter({
        routes:[{
          path:'/home,component:HomeContainer}]
        })
   1.8 将路由模块挂载到 vm实例上
        new Vue({
            el:"#app",
            router})
   1.9  用 router-view 标签站位路由匹配区域
