import Vue from 'vue';
import Router from 'vue-router';

// const Home = resolve => require(['../pages/home'], resolve);
// const Introduce = resolve => require(['../pages/introduce'], resolve);

import Home from '../pages/home';
import Introduce from '../pages/introduce';
import Brand from '../pages/brand';
import StoreList from '../pages/store-list';
import StoreDetail from '../pages/store-detail';

Vue.use(Router);

let router = new Router({
  mode: 'hash',
  routes: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/store-list',
      name: 'store-list',
      component: StoreList
    },
    {
      path: '/store-detail/:id',
      name: 'store-detail',
      component: StoreDetail
    },
  ],
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    // 对于所有路由导航，简单地让页面滚动到顶部。
    return { x: 0, y: 0 };
  },
});

export default router;