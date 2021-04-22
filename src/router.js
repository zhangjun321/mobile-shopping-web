import Vue from 'vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import VueRouter from 'vue-router'
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photo/photoList.vue'
Vue.use(VueRouter)




const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/homePage'},
    {path:'/member',component:MemberContainer},
    {path:'/shopCart',component:ShopContainer},
    {path:'/homePage',component:HomeContainer},
    {path:'/search',component:SearchContainer},
    {path:'/homePage/newsList',component:NewsList},
    {path:'/homePage/newsInfo/:id',component:NewsInfo},
    {path:'/homePage/photoList',component:PhotoList}
  ],
  linkActiveClass:'mui-active', //使用mui-active 替换默认的类 router-link-active
});


export default router;
