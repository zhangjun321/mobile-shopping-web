import Vue from 'vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入新闻列表组件
import NewsList from './components/news/NewsList.vue';
//导入新闻详情组件
import NewsInfo from './components/news/NewsInfo.vue';




const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/homePage'},
    {path:'/member',component:MemberContainer},
    {path:'/shopCart',component:ShopContainer},
    {path:'/homePage',component:HomeContainer},
    {path:'/search',component:SearchContainer},
    {path:'/homePage/newsList',component:NewsList},
    {path:'/homePage/newsInfo/:id',component:NewsInfo}
  ],
  linkActiveClass:'mui-active', //使用mui-active 替换默认的类 router-link-active
});


export default router;
