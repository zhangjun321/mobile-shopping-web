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

# promise的使用
  需求：封装一个方法，将给定文件路径的文件内容读取并返回
  + promise用于解决回调地狱的问题，将回调嵌套的层级结构转变成链式结构
  + Promise是一个构造函数，在它身上有reject和resolve两个回调函数表示成功和失败的回调
  + Promise构造函数中的prototype有.then()方法，只要是Promise的实例都可以调用这个.then方法
  + Promise表示一个异步操作，每当我们new一个实例就表示一个具体的异步操作
  + Promise表示一个异步操作，只能有两种状态，1 成功，2 失败
  + 如果内部拿到Promise的操作结果无法使用return将结果返回 ，只能使用回调函数将成功或者失败的结果返回给调用者
  + 我们可以在new出来的Promise实例上调用.then()方法，预先指定成功或失败的回调函数,如果不想让Promise实例中的异步操作代码
    块立即执行应该使用方法将promise实例封装，交给调用者执行

          //如果后续Promise执行依赖于前面Promise执行的结果。一旦有报错则立即终止所有的promise执行
          // catch()的作用是捕获异常并立即终止程序继续执行

          getFileByPath(path.join(__dirname, '/11.txt')).then(function (data){
          console.log(data)
          return getFileByPath(path.join(__dirname, '/2.txt'))
          }).then(function (data){
          console.log(data)
          return getFileByPath(path.join(__dirname, '/3.txt'))
          }).then(function (data){
          console.log(data)
          }).catch(function (err){
          console.log(err.message)
          })

          console.log("ok")


# Promise也可以在jquery发送ajax请求的时候使用
           $(function (){
                      $('#btn').on('click',function (){
                      $.ajax({
                      url:'./data.json',
                      type:'get',
                      dataType:'json',

                      }).then(function (data){
                      console.log(data)
                      })
                      })
                      })
