import Vue from 'vue'
import App from './App.vue'
//导入vant
// import Vant from 'vant';
// import 'vant/lib/index.css';
//导入路由
import router from './router'
// Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
