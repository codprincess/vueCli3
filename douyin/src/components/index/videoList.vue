<template>
<div id="video-list">
<swiper :options="swiperOption">
    <!-- 幻灯内容 -->
    <swiper-slide style="text-align:center">
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>    
    </swiper-slide>    
    <swiper-slide>
         <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>       
    </swiper-slide> 
    <swiper-slide>slide1</swiper-slide>    
    <swiper-slide>slide2</swiper-slide> 
</swiper>
</div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import { videoPlayer } from 'vue-video-player'
    export default{
        name:'videoList',
        components: {
            swiper,          //定义组件
            swiperSlide,
            videoPlayer
        },
        data(){
            return {
                swiperOption: {
                    direction:"vertical",
                    grabCursor: true, 
                    setWrapperSize: true, 
                    autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,
                    mousewheel: true, 
                    mousewheelControl: true, 
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0, 
                    observeParents: true, 
                },
                playerOptions : {
                   // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', 
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [
                        {
                            src: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',  // 路径
                            type: 'video/mp4'  // 类型
                        }, 
                    ],
                    //poster: "../../static/images/test.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar:false
                }

            }
        },
     }
</script>
<style>
    #video-list{height: 100%;z-index: 100;}
    #video-list .swiper-container{
        height: 100%;
    }
     #video-list .vjs-custom-skin > .video-js .vjs-big-play-button {
        background-color: rgba(0,0,0,0.45);
        font-size: 3.5em !important;
        border-radius: 50% !important;
        height: 1.5em !important;
        line-height: 2em !important;
        width: 1.5em !important;
        top: 50% !important;
        transform: translate(0, -50%) !important;
        left: 45%;
    }

    #video-list .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
        position: absolute;
        top: -9px;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>