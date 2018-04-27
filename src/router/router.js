import Vue from 'vue';
import Router from 'vue-router';
import $ from 'jquery';

// const Home = resolve => require(['../pages/home'], resolve);
// const Introduce = resolve => require(['../pages/introduce'], resolve);

import Home from '../pages/home';
import Introduce from '../pages/introduce';
import Brand from '../pages/brand';
import StoreList from '../pages/store-list';
import StoreDetail from '../pages/store-detail';
import JiaMeng from '../pages/jiameng';
import Story from '../pages/story';

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
      path: '/store-detail/:cityId/:storeId',
      name: 'store-detail',
      component: StoreDetail
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: JiaMeng
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
  ],
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    // 对于所有路由导航，简单地让页面滚动到顶部。
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  next();
  // 重要的是设置跳转的时机。过早的话页面还没加载完成，高度不够导致不能滚动。过晚的话会造成页面的闪烁。
  router.app.$nextTick(() => { 
    // document.body.scrollTop = 0;
    // console.log('cloud');
    $('body,html').animate({ scrollTop: 0 }, 0);
  });
});

export default router;