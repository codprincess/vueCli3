<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AMap from 'AMap'
export default {
  name: 'App',
  data(){
    return{
      city:''
    }
  },
  components: {
    // HelloWorld
  },
  created(){
    // this.getLocation();
  },
  methods:{
    getLocation(){
      let _this = this;
      AMap.plugin('AMap.Geolocation', function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 1000,
          // // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          // buttonOffset: new AMap.Pixel(10, 20),
          // //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          // zoomToAccuracy: true,     
          // //  定位按钮的排放位置,  RB表示右下
          // buttonPosition: 'RB'
        })

        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete)
        AMap.event.addListener(geolocation, 'error', onError)

        function onComplete (data) {
          // data是具体的定位信息
          console.log('111',data)
        }

        function onError (data) {
          // 定位出错
           console.log(data)
           _this.getLocationCity()

        }
      })

    },

    getLocationCity(){
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            // 查询成功，result即为当前所在城市信息
            console.log('222',result);
            this.city = result.city

          }
        })
      })
    }

  }
}
</script>

<style>
#app {
  height: 100%;
  background: #000;
}
</style>
