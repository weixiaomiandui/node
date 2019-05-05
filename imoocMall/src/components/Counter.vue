<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>
<script>
  export default {
    props:["num"],
    data(){
      return {
        msg:'hello vue',
        num:1
      }
    },
    methods:{
      increment(){
        this.$emit('incre')
      },
      decrement(){
        this.$emit('decre')
      }
    }
  }
</script>
