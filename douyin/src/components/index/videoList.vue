<template>
<div id="video-list">
<swiper :options="swiperOption">
    <swiper-slide v-for="(item,index) in dataList" :key="index">
        <div>
            <!--获取子组件的dom节点-->
            <videos ref="videos" :videoList="item" :index="index"></videos>
        </div>
        <div class="leftwarp">
            <left-bar></left-bar> 
        </div>
        <div class="rightwarp">
            <right-bar></right-bar> 
        </div>
    </swiper-slide>    
</swiper>
</div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Videos from '../../components/index/Videos'
    import LeftBar from '../../components/index/LeftBar'
    import RightBar from '../../components/index/RightBar'
    export default{
        name:'videoList',
        components: {
            swiper,          
            swiperSlide,
            LeftBar,
            RightBar,
            Videos
        },
        data(){
            return {
                page:1,
                swiperOption: {
                    direction:"vertical",
                    grabCursor: true, 
                    setWrapperSize: true, 
                    autoHeight: true, 
                    slidesPerView: 1,
                    mousewheel: true, 
                    mousewheelControl: true, 
                    height: window.innerHeight,
                    resistanceRatio: 0, 
                    observeParents: true, 
                    on:{
                        tap:()=>{
                            this.playerAction(this.page-1)
                        },
                       slideNextTransitionStart:()=>{
                           this.page +=1;
                          // console.log(this.page)
                           this.nextVideo(this.page-1)
                        },
                        slidePrevTransitionEnd:()=>{
                            if(this.page>1){
                                this.page -=1;
                                this.prevVideo(this.page-1)
                            }
                          // console.log(this.page)
                        }
                    }
                },
                dataList:[
                    {
                        id:"1",
                        url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
                    },
                    {
                        id:"2",
                        url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                    },
                    {
                        id:"3",
                        url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
                    },
                    {
                        id:"4",
                        url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"

                    }
                ]
            }
        },
        methods:{
            //将子组件的方法传到我们的父组件上
            //视频的播放与暂停
            //接收滑动的索引
            playerAction(index){
                this.$refs.videos[index].playOrpause()
            },

            nextVideo(index){
                this.$refs.videos[index-1].stop();
                 this.$refs.videos[index].play()
            },

            prevVideo(index){
                this.$refs.videos[index+1].stop();
                 this.$refs.videos[index].play()
            }
        }
     }
</script>
<style>
    #video-list{height: 100%;z-index: 100;}
    #video-list .swiper-container{
        height: 100%;
    }
    .leftwarp{
        position: absolute;
        bottom:60px;
        left: 0;
        width: 75%;
    }
    .rightwarp{
        position: absolute;
        right: 0;
        bottom: 50px;
        width: 20%;
    }


</style>