// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {install} from './index'
import './assets/js/rem';
import  './assets/css/base.css'
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.use(install);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
