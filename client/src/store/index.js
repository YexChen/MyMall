import Vue from 'vue'
import Vuex from 'vuex'
import cookieHandler from '@/utils/cookieHandler'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLogin: false,
    showRegist: false,
    hdUsername: '登录'
  },
  mutations: {
    showLoginModel (state, method) {
      if (this.state.hdUsername === '登录') {
        this.state.showLogin = !this.state.showLogin
      }
    },
    updateUserInfo (state) {
      let myCookie = cookieHandler.getCookie(document.cookie)
      console.log(myCookie.userName)
      this.state.hdUsername = myCookie.userName ? myCookie.userName : '登录'

      this.state.showLogin = false
    },
    showRegistModel (state) {
      this.state.showRegist = !this.state.showRegist
    }
  },
  actions: {
    showLoginModel (context, method) {
      this.commit('showLoginModel', method)
    },
    showRegistModel () {
      this.commit('showRegistModel')
    },
    updateUserInfo () {
      this.commit('updateUserInfo')
    }
  },
  computed: {

  },
  getters: {
    showLogin: (state) => {
      return state.showLogin
    },
    showRegist: (state) => {
      return state.showRegist
    },
    hdUsername: (state) => {
      return state.hdUsername
    }
  }
})
