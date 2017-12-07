<template lang="html">
  <main>
    <!-- 排序的一条白色的东西 -->
    <div class="sort-banner">
      <div class="sort-group">
        <span>排序：</span>
        <span class = "sort-group-active">默认</span>
        <span @click = "reversePriceFilter">价格<img src="./../assets/images/箭头.svg" alt=""></span>
      </div>
    </div>
    <!-- 这里是主文章部分，包括左边的价格，右边商品列表 -->
    <article>
      <!-- 这里是左边价格排序 -->
      <aside>
        <p>价格：</p>
        <ul>
          <li class = "active" @click = "changPriceFilter(10)">所有</li>
          <li v-for = "(item,index) in priceFilter" @click = "changPriceFilter(index)">
            {{priceFilter[index].startPrice}}-
            {{priceFilter[index].endPrice}}
          </li>
        </ul>
      </aside>
      <!-- 这里是主要放商品的地方 -->
      <section v-infinite-scroll = "loadMore" infinite-scroll-disabled = "busy" infinite-scroll-distance="10">
        <div class="goods-item-section" v-for = "(item,index) in goodsList">
          <div class="goods-item-image">
            <img v-lazy = "'/static/'+item.productImage" alt="">
          </div>
          <div class="goods-item-bottom">
            <p class = "goods-name">{{item.productName}}</p>
            <p class = "goods-price">￥{{item.salePrice}}</p>
            <p class = "add-to-chart">加入购物车</p>
          </div>
        </div>
      </section>
    </article>
    <!-- 这里是登陆模态框 -->
    <models v-if = "mdShow">
      <div slot="input-area">
        <input class = 'md-input' type="text" name="" value="" placeholder="请输入您的账号" v-model = "loginFormData.username">
        <input class = 'md-input' type="password" name="" value="" placeholder="请输入您的密码" v-model = "loginFormData.password">
      </div>
      <div slot = "btn-group" class="button-group">
        <button class = "md-btn" type="button" name="button"  @click = "modelConfirm">确认</button>
        <button class = "md-btn" type="button" name="button" @click = "showLoginModel">取消</button>
      </div>
    </models>
    <!-- 这里是注册模态框 -->
    <models v-if = "registMdShow">
      <div slot="input-area">
        <input class = 'md-input' type="text" name="" value="" placeholder="请输入您的账号" v-model = "registFormData.username">
        <input class = 'md-input' type="password" name="" value="" placeholder="请输入您的密码" v-model = "registFormData.password">
      </div>
      <div slot = "btn-group" class="button-group">
        <button class = "md-btn" type="button" name="button"  @click = "registModelConfirm">确认</button>
        <button class = "md-btn" type="button" name="button" @click = "showRegistModel">取消</button>
      </div>
    </models>
  </main>
</template>

<script>
import Models from '@/components/models'
export default {
  data () {
    return {
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '100.00'
        },
        {
          startPrice: '100.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00'
        },
        {
          startPrice: '1000.00',
          endPrice: '5000.00'
        }
      ],
      goodsList: {

      },
      priceLevel: 0,
      sort: -1,
      busy: false,
      page: 1,
      loginFormData: {
        username: '',
        password: ''
      },
      registFormData: {
        username: '',
        password: ''
      },
      users: {
        username: '',
        userId: '',
        loged: false
      }

    }
  },
  methods: {
    getGoodsList (loadMore = false, page = 1, pageSize = 8, priceLevel = this.priceLevel, sort = this.sort) {
      this.$http.get(`/goods/getList?page=${page}&pageSize=${pageSize}&priceLevel=${priceLevel}&sort=${sort}`).then((res) => {
        // if (res.data.result.count == 0) {
        //   return
        // }
        if (loadMore) {
          for (var i in res.data.result.list) {
            this.goodsList.push(res.data.result.list[i])
          }
          this.busy = false
        } else {
          this.goodsList = res.data.result.list
          this.page = 1
        }
      })
    },
    changPriceFilter (priceLevel) {
      this.priceLevel = priceLevel
      this.init()
    },
    loadMore () {
      this.busy = true
      this.getGoodsList(true, ++this.page)
    },
    init () {
      this.getGoodsList()
      this.updateUserInfo()
    },
    reversePriceFilter () {
      this.sort = this.sort * (-1)
      this.init()
    },
    showLoginModel () {
      this.$store.dispatch('showLoginModel')
    },
    showRegistModel () {
      this.$store.dispatch('showRegistModel')
    },
    modelConfirm () {
      let _this = this
      this.$http.post('/users/login', {
        username: _this.loginFormData.username,
        password: _this.loginFormData.password
      }).then((res) => {
        console.log(res)
        if (res.data.status === '0') {
          console.log('登入成功')
          this.updateUserInfo()
        }
      })
    },
    registModelConfirm () {
      this.$http.post('/users/regist', {
        username: this.registFormData.username,
        password: this.registFormData.password
      }).then((res) => {
        if (res.data.status === '0') {
          console.log('注册成功')
          this.showRegistModel()
        } else {
          console.log(res.data.msg)
        }
      })
    },
    updateUserInfo () {
      this.$store.dispatch('updateUserInfo')
    }
  },
  mounted () {
    this.getGoodsList()
    this.updateUserInfo()
  },
  components: {
    Models
  },
  computed: {
    mdShow () {
      return this.$store.getters.showLogin
    },
    registMdShow () {
      return this.$store.getters.showRegist
    }
  }
}
</script>

<style lang="sass" scoped>
  main
    width: 1260px
    margin : 60px auto 30px
    .sort-banner
      width: 100%
      height: 55px
      background-color: white
    article
      width: 100%
      margin : 30px 0px
      aside
        width: 240px
      section
        width: 1000px

  footer
    width: 94%
    padding : 1px
    margin : 220px auto 0px

  main
    .sort-banner
      .sort-group
        float: right
        margin-right : 20px
        span
          line-height : 55px
          padding : 0px 10px
          cursor : pointer
          img
            height: 15px
        .sort-group-active
          color : orange
    article
      display : flex
      aside
        padding-left: 20px
        ul
          padding : 0
          li
            font-size : 14px
            padding : 5px 0px
            margin : 20px 0px
            letter-spacing: 0.05em
            cursor : pointer
            transition : padding-left 0.5s,color 0.5s
          li:hover
            padding-left : 12px
            color : orange
            border-left : 2px solid #EE7A23
          .active
            padding : 7px 12px
            font-weight : 600
            border-left : 2px solid #EE7A23
            box-sizing: border-box
      section
        flex : 1
        font-size : 0
        .goods-item-section
          position : relative
          display : inline-block
          width: 239px
          height: 405px
          margin : 8px 8px
          background-color: white
          box-sizing: border-box
          border : 2px solid #E9E9E9
          font-size : 15px
          transition : transform 0.5s,border 1s
          cursor : pointer
          .goods-item-image
            width: 100%
            height: 240px
            img
              width: 100%
              height: 100%
          .goods-item-bottom
            width: 100%
            padding : 0px 10px
            .goods-name
              margin-top : 10px
              margin-bottom : 38px
            .goods-price
              color : #D1434A
              font-size : 18px
            .add-to-chart
              color : #D1434A
              text-align : center
              padding : 12px 58px
              box-sizing: border-box
              border : 1px solid #D1434A
        .goods-item-section:hover
          transform : translateY(-5px)
          border : 2px solid #EE7A23
          box-shadow: 0 0 10px #CCCDD0
</style>
