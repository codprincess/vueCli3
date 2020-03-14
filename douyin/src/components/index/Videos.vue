<template>
    <div class="videos">
         <video-player  class="video-player vjs-default-skin vjs-big-play-centered"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>  
    </div>
</template>
<script>

import 'video.js/dist/video-js.css'
 import { videoPlayer } from 'vue-video-player'
export default {
    name:'Video',
    props:['videoList','index'],
    data(){
        return{
            playerOptions : {
                autoplay: false, 
                muted: false, 
                loop: false, 
                preload: 'auto', 
                fluid: true, 
                sources: [
                    {
                        src: this.videoList.url,
                        type: 'video/mp4'  // 类型
                    }, 
                ],
                //poster: "../../static/images/test.jpg", //你的封面地址
                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar:false,
                videoButton: require("../../static/image/dy-btn.png"),
            },
            playing:true

        }
    },
    created(){
        this.autoPlayAction()
    },
    methods:{
        playOrpause(){
            //获取dom节点
            if(this.playing){
                this.$refs.videoPlayer.player.pause()
                this.playing = false
            }else{
                this.$refs.videoPlayer.player.play()
                this.playing = true
            }
        },

        play(){
            this.$refs.videoPlayer.player.load()
            this.$refs.videoPlayer.player.play()
            this.playing = true;
        },
        stop(){
            this.$refs.videoPlayer.player.pause()
            this.playing = false;
        },
        autoPlayAction(){
            if(this.index==0){
               // console.log(this.index);
                this.playerOptions.autoplay = true;
            }
        }
    },
    components:{
         videoPlayer,
    }
}
</script>
<style>
    .videos{
         /* position: relative; */
         height: 100%;
         text-align: center;
    }
     .videos .vjs-default-skin > .video-js .vjs-big-play-button {
        background-color: rgba(0,0,0,0.45);
        font-size: 3.5em !important;
        border-radius: 50% !important;
        height: 1.5em !important;
        line-height: 2em !important;
        width: 1.5em !important;
        top: 50% !important;
        transform: translate(-50%, -50%) !important;
        left: 50%;

        /***/
        margin-top: 0;
        margin-left: 0;
    }
    .videos .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
        position: absolute;
        top: -9px;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>