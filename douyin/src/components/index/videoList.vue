<template>
<div id="video-list">
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in dataList" :key="index">
            <div style="z-index:88">
                <!--获取子组件的dom节点-->
                <videos ref="videos" :videoList="item" :index="index"></videos>
            </div>
            <div class="leftwarp">
                <left-bar></left-bar> 
            </div>
            <div class="rightwarp" >
                <right-bar @changeCom="showComs" ref="rightBar"></right-bar> 
            </div>
        </swiper-slide>    
    </swiper>
    <!--评论列表-->
     <transition name="up">
    <div class="comment-warp" v-if="showComment">
        <div class="comment-list">
            <div class="comment-top">
                <div class="number">10.4w条评论</div>
                <div @click="closeCom" class="close"><span>x</span></div>
            </div>
            <div class="comment-body">
                <div class="comment-box">
                    <div class="comment-item">
                        <div class="user-pic"><img src="https://hbimg.huabanimg.com/3a406a3c11b000fbe693ff1a7b6c683ce8e2da8eba51-Pjvr4c_fw658" alt="头像"></div>
                        <div class="item-info">
                            <div class="reply-info">
                                <p class="nick">前端切图仔</p>
                                <p class="reply">求不要加班，每个星期都不加班 <span class="time">03-17</span></p>
                            </div> 
                            <div class="zan"><span class="iconfont icon-love-b"></span><p>120</p></div>
                        </div>
                    </div>
                    <div class="sub-comment-item">
                        <div class="user-pic"><img src="https://hbimg.huabanimg.com/3a406a3c11b000fbe693ff1a7b6c683ce8e2da8eba51-Pjvr4c_fw658" alt="头像"></div>
                        <div class="item-info">
                            <div class="reply-info">
                                <p class="nick">前端切图仔</p>
                                <p class="reply">
                                    <span class="re-back">回复</span> 
                                    <span class="re-nack">前端切图仔：</span>
                                    <span>是的不加班</span>
                                    <span class="time">03-17</span>
                                </p>
                            </div> 
                            <div class="zan"><span class="iconfont icon-love-b"></span><p>120</p></div>
                        </div>
                    </div>
                    <div class="sub-comment-item">
                        <div class="user-pic"><img src="https://hbimg.huabanimg.com/3a406a3c11b000fbe693ff1a7b6c683ce8e2da8eba51-Pjvr4c_fw658" alt="头像"></div>
                        <div class="item-info">
                            <div class="reply-info">
                                <p class="nick">前端切图仔</p>
                                <p class="reply">
                                    <span class="re-back">回复</span> 
                                    <span class="re-nack">前端切图仔：</span>
                                    <span>是的不加班</span>
                                    <span class="time">03-17</span>
                                </p>
                            </div> 
                            <div class="zan"><span class="iconfont icon-love-b"></span><p>120</p></div>
                        </div>
                    </div>
                    <div class="more">---展开50条回复---</div>
                </div>
            </div>
             <!--评论-->
            <div class="reply-input">
                <input type="text" placeholder="留下你的精彩评论吧">
                <span class="emoji">@</span>
                <span class="iconfont icon-pinglun"></span>
            </div>
        </div>
       
    </div>
     </transition>>
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
                        click:()=>{
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
                ],
                showComment:false
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
            },
            //点击出现评论列表
            showComs(){
                this.showComment = true;
            },
            //closeCom
            closeCom(){
                this.showComment = false;
            },
        }
     }
</script>
<style>
    #video-list{height: 100%;}
    #video-list .swiper-container{
        height: 100%;
        z-index: 1;
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
        z-index: 999;
        pointer-events:auto;
    }
    /**评论 */
    .up-enter-active, .up-leave-active{
        transition: all .5s
    }
    .up-enter, .up-leave-to{
        opacity: 1;
        transform :translateY(100%);
    }
    .comment-warp{
        position: fixed;
        bottom: 50px;
        left: 0;
        height: 450px;
        width: 100%;
        background: #ffffff;
        z-index: 999;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 10px 10px;
        box-sizing: border-box;
    }
    .comment-body{
       max-height:380px;
       overflow: auto;
       /* padding-bottom: 30px; */
    }
    .comment-box{
        margin-top: 20px;
    }
    ::-webkit-scrollbar{width: 0;}
    .comment-top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .number{ text-align: center;flex: 1;}
    .close{padding-right: 10px;}
    .comment-item{display: flex;}
    .user-pic img{width: 33px;width: 33px;border-radius: 50%;}
    .item-info{
        margin-left:6px;
        flex: 1 1 auto;
        height: 100px;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
    }
    .reply-info .nick{
        font-size: 16px;
        color: #666;
        margin-bottom: 10px;
    }
    .reply-info .reply{
        font-size: 18px;
        color: #000;
       line-height: 24px;
    }
    .reply .time{color: #666;}
    .zan{margin-left: 30px;margin-right: 10px;color: #cccccc}
    .zan .iconfont{font-size: 26px;color: #cccccc;}
    .zan p{padding-top: 5px;}
    .sub-comment-item{
        display: flex;
        margin-left: 33px;
    }
    .re-nack{padding: 0 5px;color: #666;}
    .more{margin-left: 33px;color: #666666;}

    /**评论框 */
    .reply-input{
        width: 100%;
        height: 50px;
        border-top: 1px #eeeeee solid;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 5;
        background: #ffffff;
        font-size: 18px;
        align-items: center;
        display: flex;
    }
    .reply-input input{
        line-height: 40px;
        width: 70%;
        border: none;
        padding-left:  10px;
    }
    .emoji{
        font-size: 30px;
        margin-right: 6%;
         color: #cccccc;
    }
    .reply-input .iconfont{
        font-size: 30px;
        color: #cccccc;
    }


</style>