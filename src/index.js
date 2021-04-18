import Vue from 'vue';
import app from './components/App.vue';
//导入Mint-ui 并按需要注册组件
import {Header,Toast,Button,Tabbar,TabItem}  from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Toast.name,Toast)
Vue.component(Button.name,Button)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import 'bootstrap/dist/css/bootstrap.css'



import router from './router';










 new Vue({
  el:'#app',
  data:{},
  methods: {},
render(createElement) {
    return createElement(app)
},
   router
})
