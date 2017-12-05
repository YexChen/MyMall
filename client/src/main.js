// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueLazyLoad from 'vue-lazyload'
import vueInfiniteScroll from 'vue-infinite-scroll'

Vue.use(vueInfiniteScroll)

Vue.config.productionTip = false

Vue.use(vueLazyLoad, {
  loading: 'static/loading-svg/loading-bubbles.svg',
  try: 3
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
