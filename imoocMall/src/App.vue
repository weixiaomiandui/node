<template>
  <div id="app">
    <router-view class="main" />
    <!--<router-view class="left" name="title"></router-view>
    <routrt-view class="right" name="img"></routrt-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .left,.right{
    float: left;
    width: 49%;
    border:1px solid #ccc;
  }
</style>
