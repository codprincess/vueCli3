import Vue from 'vue'
import App from './App.vue'
//导入vant
// import Vant from 'vant';
// import 'vant/lib/index.css';
//导入路由
import router from './router'
//挂载轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// Vue.use(Vant);
//引入阿里图标库
import './static/iconfont/iconfont.css'
//挂载视频播放器
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
