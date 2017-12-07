<template lang="html">
  <div class="md-body">
    <slot name="input-area">
      
    </slot>
    <slot name="btn-group">

    </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  .md-body
    position : fixed
    top : 50%
    left : 50%
    transform : translateX(-50%) translateY(-50%)
    width : 500px
    height : 300px
    background-color: white
    box-shadow: 0 0 10px rgba(0,0,0,0.5)
    padding-top : 50px
    .md-input
      width : 70%
      height : 40px
      margin : 20px auto
      display : block
      outline : none
      border : 1px solid rgba(30,30,30,0.3)
      box-sizing: border-box
      text-indent : 1em
    .button-group
      position : absolute
      bottom : 45px
      left : 50%
      width : 70%
      transform : translateX(-50%)
      .md-btn
        background-color: #D2484F
        width : 140px
        height : 45px
        outline : none
        border : 0px
        color : white
        font-weight: 500
        margin : 0px 15px
</style>
