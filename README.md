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
  promise用于解决回调地狱的问题，将回调嵌套的层级结构转变成链式结构


      +如果后续Promise执行依赖于前面Promise执行的结果。一旦有报错则立即终止所有的promise执行
      + catch()的作用是捕获异常并立即终止程序继续执行
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

        getFileByPath(path.join(__dirname, '/1.txt')).then(function (data){
        console.log(data)
        },function (err){
        console.log(err.message)
        })

#Jquery的ajax异步请求也可以使用promise
  $(function (){
          $('#btn').on('click',function (){
            $.ajax({
              url:'./data.json',
              type:'get',
              dataType:'json', }).then(function (data){
              console.log(data)
            })
          })
      })
# 完成点击首页中的新闻资讯链接进入NewsList页面
      + 改造路由链接√
      + 修改页面样式√
      + 请求API接口数据并渲染到页面√
# 完成点击新闻资讯列表中的链接进入新闻详情的功能
      + 创建NewsInfo组件，改造路由√
      + 绘制页面√
      + 请求API接口数据并渲染到页面√
# 单独创建一个评论子组件，可以复用到需要添加评论功能页面的区域
      + 创建Comment.vue组件√
      + 绘制页面√
      + 请求API接口数据并渲染到页面√
      + 实现发表评论按钮功能√
          1 给发表评论按钮添加单击事件√
          2 双向绑定textarea数据 v-model√
          3 在单击事件方法中判断一下评论内容是否为空√
            如果为空则弹出警告√
            如果不为空则将将评论内容封装成对象，使用unshift方法添加在评论数组对象的头部并显示到页面√
      + 实现加载更多按钮功能√
          1 给加载更多按钮添加单击事件√
          2 更新getComment中的this.commentList=this.commentList.concact(result.body.message)√
            将下一页的数据拼接到this.commentList数组√
          3 单击事件方法： 1 pageIndex++ 2 调用getComment方法√

# 图片分享功能实现
      + 添加路由功能√

      + 制作顶部的滑动条√
          tab-top-webview-main.html√
          去掉全屏显示的 mui-fullscreen类√
          滑动条不能正常使用的处理方法：
            导入MUI的js文件，按照官网的方法初始化scroll控件√
              初始化的方法要放到mounted(){}钩子函数中，否则刚进入页面不能滑动滚动条，需要刷新页面√
            安装并在package.json中注册插件 babel-plugin-transform-remove-strict-mode 用于取消严格模式√
          解决Tabbar无法正常切换组件的问题√
            经过分析是mui.js中的类名和tabbar中的类名冲突造成的，重命名mui-tab-item类名，并在App.vue添加样式√
      + 将API接口getimagecategory中的标题数据渲染到图像分类链接上√

# 制作图片列表区域
      + 图片列表需要使用懒加载技术 可以使用mint-ui的组件lazyload√
          使用vue-preview 插件实现缩略图的显示
      + 新增一个photoInfo.vue组件，配置路由关系
      + 调整图片列表布局样式√
      + 获取API接口数据并渲染到页面上
      + 实现加载更多按钮的功能
# 商品列表功能
      + 绘制商品列表页面，修改样式
          使用了bootstrap的card组件
      + 从API获取数据并渲染页面

# 商品详情功能
      + 路由链接改造，新建goodsInfo.vue组件
      + 使用编程式导航修改路由链接

# 抽取轮播图为公共组件
      + 新建Carousel.vue组件，将录播图的html代码和样式拷到里面
      + 在需要使用轮播图的页面
        1 导入轮播图组件
        2 在vm 的components里注册
        3 使用标签的形式在页面上使用，将轮播图的数据以参数的形式传给子组件   :swipeList="carousel"
