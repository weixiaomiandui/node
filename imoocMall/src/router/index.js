import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
Vue.use(Router)

export default new Router({
 // mode:'history',
  //mode:'hash',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title:Title,
        img:Image
      },
      /*children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]*/
    },
    {
      path:'/cart/:cartId',
      name:'cart',
      component:Cart
    }
  ]
})
