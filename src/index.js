import Vue from 'vue';
import app from './components/App.vue';
//导入Mint-ui 并按需要注册组件
// import {Header,Toast,Button,Tabbar,TabItem,Swipe, SwipeItem,}  from 'mint-ui'
// //Header组件注册
// Vue.component(Header.name,Header)
// //Toast组件祖册
// Vue.component(Toast.name,Toast)
// //Button组件祖册
// Vue.component(Button.name,Button)
// //Tabbar组件注册
// Vue.component(Tabbar.name, Tabbar);
// //TabItem组件祖册
// Vue.component(TabItem.name, TabItem);
// //轮播图组件注册
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

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
// Vue.http.root='http://127.0.0.1:8899/'
Vue.http.emulateJSON=true



// //懒加载页面
// import { Lazyload  } from 'mint-ui';
//
// Vue.use(Lazyload);

import VuePreview from 'vue-preview'

// default install
Vue.use(VuePreview)


// vuex install
// npm install vuex -S
// import vuex
import Vuex from 'vuex'
// register
Vue.use(Vuex)
// new Vuex.store() instance,得到数据仓储对象

const store = new Vuex.Store({
  state:{
    //  用来存储公共数据
    count:0
  },
  mutations:{
  //  如果要操作state中的数据 只能调用mutations中定义的方法来操作数据不能直接在组件中操作数据，容易引起数据混乱
    increase(state){
      state.count++
    },
  //  如果想要调用 mutations中的方法只能使用 this.$store.commit('increase')
    decrease(state,c){
      // mutation 中的方法只能接收两个参数，参数1 state 参数2 可以是一个对象，数组，或者常数
      state.count-=c[0]+c[1]
    },
  },
  getters:{
    optCounter(state){
      return '当前的计数器值为:'+state.count
    }
  }
})


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
   router,
   store,
})
