import Vue from 'vue';
import app from './components/App.vue';
//导入Mint-ui 并按需要注册组件
import {Header,Toast,Button,Tabbar,TabItem,Swipe, SwipeItem}  from 'mint-ui'
//Header组件注册
Vue.component(Header.name,Header)
//Toast组件祖册
Vue.component(Toast.name,Toast)
//Button组件祖册
Vue.component(Button.name,Button)
//Tabbar组件注册
Vue.component(Tabbar.name, Tabbar);
//TabItem组件祖册
Vue.component(TabItem.name, TabItem);
//轮播图组件注册
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入mui的样式
import './lib/mui/css/mui.css'
//引入mui的扩展样式和字体样式，用于扩展图标的使用
import './lib/mui/css/icons-extra.css'
import 'bootstrap/dist/css/bootstrap.css'
//导入路由模块，挂载到vm实例上
import router from './router';

 //2.1导入vue-resource
import VueResource from 'vue-resource';
 //2.2安装vue-resource
Vue.use(VueResource)

//导入格式化时间的插件
import moment from 'moment'





//定义全局的过滤器
Vue.filter('dataFormat',function (data,pattern="YYYY/MM/DD :HH:mm:ss"){
     return  moment(data).format(pattern)
})

 new Vue({
  el:'#app',
  data:{},
  methods: {},
render(createElement) {
    return createElement(app)
},
   router
})
