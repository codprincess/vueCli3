import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import qs from 'qs';
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
//自定义弹框
import Toast from './components/toast/toast.js'
Vue.prototype.$toast = Toast
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
axios.defaults.baseURL = '';
//请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method == 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
