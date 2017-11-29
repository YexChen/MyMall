<template lang="html">
  <main>
    <!-- 排序的一条白色的东西 -->
    <div class="sort-banner">
      <div class="sort-group">
        <span>排序：</span>
        <span class = "sort-group-active">默认</span>
        <span>价格<img src="./../assets/images/箭头.svg" alt=""></span>
      </div>
    </div>
    <!-- 这里是主文章部分，包括左边的价格，右边商品列表 -->
    <article>
      <!-- 这里是左边价格排序 -->
      <aside>
        <p>价格：</p>
        <ul>
          <li class = "active">所有</li>
          <li>0.00-100.00</li>
          <li>100.00-500.00</li>
          <li>500.00-1000.00</li>
          <li>1000.00-500.00</li>
        </ul>
      </aside>
      <!-- 这里是主要放商品的地方 -->
      <section>
        <div class="goods-item-section">
          <div class="goods-item-image">
            <img src="./../assets/images/zipai.jpg" alt="">
          </div>
          <div class="goods-item-bottom">
            <p class = "goods-name">自拍杆</p>
            <p class = "goods-price">￥39.00</p>
            <p class = "add-to-chart">加入购物车</p>
          </div>
        </div>
        <div class="goods-item-section">
          <div class="goods-item-image">
            <img src="./../assets/images/zipai.jpg" alt="">
          </div>
          <div class="goods-item-bottom">
            <p class = "goods-name">自拍杆</p>
            <p class = "goods-price">￥39.00</p>
            <p class = "add-to-chart">加入购物车</p>
          </div>
        </div>
        <div class="goods-item-section">
          <div class="goods-item-image">
            <img src="./../assets/images/zipai.jpg" alt="">
          </div>
          <div class="goods-item-bottom">
            <p class = "goods-name">自拍杆</p>
            <p class = "goods-price">￥39.00</p>
            <p class = "add-to-chart">加入购物车</p>
          </div>
        </div>
        <div class="goods-item-section">
          <div class="goods-item-image">
            <img src="./../assets/images/zipai.jpg" alt="">
          </div>
          <div class="goods-item-bottom">
            <p class = "goods-name">自拍杆</p>
            <p class = "goods-price">￥39.00</p>
            <p class = "add-to-chart">加入购物车</p>
          </div>
        </div>
        <div class="goods-item-section"></div>
        <div class="goods-item-section"></div>
        <div class="goods-item-section"></div>
        <div class="goods-item-section"></div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
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
