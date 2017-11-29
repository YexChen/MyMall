<template lang="html">
  <footer>
    <div class="foot-container-left">
      <span>区域</span>
      <select class="" name="">
        <option value="Zh-cn">中国</option>
        <option value="UN">美国</option>
      </select>
    </div>
    <div class="foot-container-right">
      <span class = "foot-copywrite">
        区域 Copyright © 2017 Dumall All Rights Reserved.
      </span>
      <span>关于我们</span>
      <span>团队&nbsp;&&nbsp;招聘</span>
      <span>协议</span>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  footer
    box-sizing: border-box
    border-top : 1px solid #D8DADE
    .foot-container-left
      margin-left: 20px
      float: left
      padding : 30px 0px
    .foot-container-right
      float: right
      margin-right: 20px
      padding : 30px 0px
      span
        padding : 0px 10px
        color : #666
        cursor : pointer
      .foot-copywrite
        color : grey

</style>
