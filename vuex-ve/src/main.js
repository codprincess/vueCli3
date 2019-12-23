// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// Vue.use(Vuex);
Vue.config.productionTip = false

// const store = new Vuex.Store({
//     //状态
//     state:{
//       count:0
//     },
//     // store 中定义“getter”（可以认为是 store 的计算属性）。
//     //就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
//     //且只有当它的依赖值发生了改变才会被重新计算。
//     getters:{
//       myCount(state){
//         return `count is ${state.count}`
//       }
//     },

//     //同步事件
//     mutations:{
//       //增加
//       increment(state){
//         state.count += 1;
//       },

//       //减少
//       descrement(state){
//         state.count -= 1
//       }
//     },

//     actions:{
//       //写异步逻辑和复杂的逻辑
//       async myIncrement(context,obj){
//         context.commit('increment',2);
//         const product = [1,2,3]
//         return product
//       },
//       myDescrement(context){
//         context.commit('descrement',1)
//       }
//     }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
