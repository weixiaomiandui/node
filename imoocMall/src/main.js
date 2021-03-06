// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from  'vue-infinite-scroll'
import {sum,minus} from './util'
import store from './store';
Vue.config.productionTip = false
Vue.use(infiniteScroll);
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
