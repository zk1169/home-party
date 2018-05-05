// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './app';
import router from './router/router';

//全局样式
import './styles/style.scss'; 
// import './assets/iconfont/iconfont.css';
import './assets/iconfont/iconfont.js';

Vue.config.productionTip = false;

// Vue.config.errorHandler = function (err, vm) {
//   // handle error
//   console.log(err);
// }

const eventBus = new Vue();
Vue.prototype.$eventHub = eventBus;

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var u = navigator.userAgent;
if (!!u.match(/AppleWebKit.*Mobile.*/)) {
    Vue.prototype.browser = 'mobile';
    Vue.prototype.isMobile = true;
    // document.body.className = 'mobile-app';
    document.getElementsByTagName('html')[0].className = 'mobile-app';
} else {
    Vue.prototype.browser = 'pc';
    Vue.prototype.isMobile = false;
    Vue.prototype.isChrome = u.indexOf('Chrome') > -1 || u.indexOf('chrome') > -1;
    // document.body.className = 'pc-app';
    document.getElementsByTagName('html')[0].className = 'pc-app';
}

// Vue.prototype.isMobile = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
