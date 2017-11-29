<template>
  <div id="app">
    <div class="page-wrapper">
      <my-header></my-header>
      <router-view/>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import './assets/stylesheets/bootstrap.min.css'
import myFooter from '@/components/footer'
import myHeader from '@/components/header'
export default {
  name: 'app',
  components: {
    myFooter,
    myHeader
  }
}
</script>

<style lang = "sass">
#app,.page-wrapper,html,body
  width: 100%
  height: 100%
  background-color: #F5F7FC

li
  list-style: none

header
  width: 100%
  height: 115px
  nav
    width: 100%
    height: 70px
    background-color: white
  .nav-bread
    width: 100%
    height: 45px
    background-color: #F0F0F0
</style>
