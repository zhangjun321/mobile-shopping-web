import VueRouter from 'vue-router';
import GoodList from './components/GoodList.vue';
import Account from './components/Account.vue';
import register from './components/SubComponents/register.vue';
import enter from './components/SubComponents/Enter.vue'
import Vue from 'vue';



const router = new VueRouter({
  routes: [
    //  account  goodliest
    {path:'/account',component:Account,
      children:[
        {path:'enter',component:enter},
        {path:'register',component:register},

      ]

    },
    {path:'/goodList',component:GoodList}
  ],
});
Vue.use(VueRouter)

export default router;
