<template>
  <div>
    这是个挥洒过频
    <span>{{$route.params}}</span>
    <!--<router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>-->
    <div>
      <router-view></router-view>
    </div>
    <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转大偶购物车页面</router-link>
    <!--<button @click="jump">跳转大偶购物车页面</button>-->
  </div>
</template>
<style>
</style>
<script>
  export default {
    data(){
      return {
        msg:'hello'
      }
    },
    methods:{
      jump(){
        //this.$router.push('/cart')
        //this.$router.push({path:'/cart?userId=133'})
        this.$router.push({path:'/cart',query:{userId:133}})
      }
    },
    comments:{

    }
  }
</script>
