// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoad from 'vue-lazyload'
import vueInfiniteScroll from 'vue-infinite-scroll'
import store from '@/store/index'

Vue.use(vueInfiniteScroll)

Vue.config.productionTip = false

Vue.use(vueLazyLoad, {
  loading: 'static/loading-svg/loading-bubbles.svg',
  try: 3
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
