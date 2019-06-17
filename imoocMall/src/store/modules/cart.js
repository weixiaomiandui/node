import Vue from 'vue';
import * as types from '../mutation-types';


export default {
  state:{
    nickName:'',
    cartCount:''
  },
  mutations:{
    UPDATE_USERINFO:(state,nickName) =>{
      console.log(nickName)
      state.nickName = nickName

    },
    UPDATE_CART:(state,cartCount)=>{
      state.cartCount +=cartCount
      console.log('state',state)
    },
    INIT_CARTCOUNT:(state,cartCount)=>{
      console.log('cartCount',cartCount)
      state.cartCount =cartCount
    },
  },
  actions:{
    updateUserInfo({commit},nickName){
      console.log(nickName)
      commit(types.UPDATE_USERINFO,nickName)
    },
    updateCart({commit},cartCount){
      commit(types.UPDATE_CART,cartCount)
    },
    initCartCount({commit},cartCount){
      console.log('cartCount',types)
      commit(types.INIT_CARTCOUNT,cartCount)
    }
  }
}
