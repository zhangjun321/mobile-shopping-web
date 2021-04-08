import Vue from 'vue';
import app from './components/App.vue';
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
import './lib/mui/css/mui.css'









 new Vue({
  el:'#app',
  data:{},
  methods: {},
render(createElement) {
    return createElement(app)
}
})
