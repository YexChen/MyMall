<template lang="html">
  <header>
    <!-- 头部，最上面那一条 -->
    <nav>
      <img class = "top-logo" src="./../assets/images/logo.png">
      <div class="right-container">
        <span class = "user-box" @click = "showLoginModel">{{hdUsername}}</span>
        <span class = "user-box" @click = "showRegistModel">{{hdUsername === '登录'?'注册':''}}</span>
        <span class = "user-box" @click = "clearLogin">{{hdUsername !== '登录'?"登出":""}}</span>
        <img class = "user-chart"src="./../assets/images/购物车空.svg" alt="">
      </div>
    </nav>
    <!-- 面包屑导航 -->
    <nav-bread>
    </nav-bread>
  </header>
</template>

<script>
  import navBread from '@/components/navBread'
  export default {
    data () {
      return {

      }
    },
    components: {
      navBread
    },
    methods: {
      showLoginModel () {
        this.$store.dispatch('showLoginModel')
      },
      showRegistModel () {
        this.$store.dispatch('showRegistModel')
      },
      clearLogin () {
        this.$http.get('/users/quitLogin', {}).then((res) => {
          if (res.data.status === '0') {
            this.$store.dispatch('updateUserInfo')
            console.log('清除成功')
          }
        })
      }
    },
    computed: {
      hdUsername () {
        return this.$store.getters.hdUsername
      }
    }
  }
</script>

<style lang="sass" scoped>
  header
    nav
      .top-logo
        margin-left : 42px
        height : 100%
      .right-container
        position: relative
        float: right
        top : 50%
        margin-right: 45px
        transform : translateY(-50%)
        .user-box
          cursor : pointer
        .user-chart
          width: 25px
          height: 21px
          margin : 5px 0px
        span
          position : relative
          top : 2px
          font-size : 15px
          color : #666
          text-align : right
          margin : 5px 0px
          padding : 0px 5px
    .nav-bread
      span
        line-height: 45px
        padding: 0px 10px
      .nav-bread-head
        color : grey
      .nav-bread-branch
        padding : 0 5px
        color : #D1434A
</style>
