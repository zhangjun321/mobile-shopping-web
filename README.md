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
   1.9  用 router-view 标签站位路由匹配区域;
2 路由高亮
   2.1  在router.js路由模块配置属性linkActiveClass:'mui-active', //使用mui-active 替换默认的类 router-link-active
# 首页轮播图的制作：使用mint-ui 的swipe组件
    1 代码
    https://mint-ui.github.io/docs/#/zh-cn2/swipe
       + 引入swipe组件
       + 把代码粘贴到页面要展示的区域
     设置录播图背景色 这里使用了scss的 交集选择器:
         &:nth-child(1){
         background-color: red;
         }

    2 从API接口获取轮播图图片数据并渲染到页面中
        + 安装 vue-resource
        //2.1导入vue-resource
          import VueResource from 'vue-resource';
        //2.2安装vue-resource
          Vue.use(VueResource)
        + 使用vue-resource的$http获取接口数据
            getSwipe(){
                        //获取轮播图图片数据
                        this.$http.get('http://127.0.0.1:8899/api/getlunbo').then(result => {
                          if(result.body.status===0){
                            this.swipeList=result.body.message;

                          }else{
                            Toast({
                              message:'获取图片数据失败！',
                              iconClass:'icon icon-success'
                            })
                          }
                        })
                      },
        +渲染轮播图页面
        +设置img的高度,宽度，和样式

#六宫格样式改造
    + 从MUI获取九宫格的代码片段grid-default-html 改造成自己的样式并加入图标
# 完成tabbar中不同路由之间的切换效果
    + 将App.js中的router-view 用 transition标签包裹
    + 配置动画的效果
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

