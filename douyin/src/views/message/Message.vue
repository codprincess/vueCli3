<template>
    <div class="message">
        <user-header title="消息" :hasBack="false" :hasSave="true" rightTxt="发起聊天"></user-header>
        <div class="msg-warp">
            <div class="msg-nav">
                <div class="msg-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>粉丝</p>
                </div>
                 <div class="msg-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>赞</p>
                </div>
                 <div class="msg-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>@我</p>
                </div>
                 <div class="msg-nav-item">
                    <div class="icon-box"><span></span></div>
                    <p>评论</p>
                </div>
            </div>
            <div class="msg-ab">
                <img src="../../static/image/bg2.png" alt="">
            </div>
            <div class="down">
                <div>抖音好友圈</div>
                <div><button class="load-btn">下载</button></div>
            </div>
            <div class="msg-list-box">
                <div class="msg-list">
                    <img src="../../static/image/avatar.jpg" alt="">
                    <div class="user-des">
                        <div class="top">
                            <span>抖音小助手</span>
                            <span>12:30</span>
                        </div>
                        <div class="top">
                            <span>抖音安全课堂</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
                 <div class="msg-list">
                    <img src="../../static/image/avatar.jpg" alt="">
                    <div class="user-des">
                        <div class="top">
                            <span>抖音小助手</span>
                            <span>12:30</span>
                        </div>
                        <div class="top">
                            <span>抖音安全课堂</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
                 <div class="msg-list">
                    <img src="../../static/image/avatar.jpg" alt="">
                    <div class="user-des">
                        <div class="top">
                            <span>抖音小助手</span>
                            <span>12:30</span>
                        </div>
                        <div class="top">
                            <span>抖音安全课堂</span>
                            <span>.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import userHeader from '../../components/header/userHeader.vue'
export default {
    data(){
        return{

        }
    },
    components:{
        userHeader
    }
}
</script>
<style scoped>
    .msg-warp{
        padding: 0 20px;
        background-color: #101821;
        color: #ffffff;
    }
    .msg-nav{
        padding: 20px 5px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
    }
    .msg-nav-item{
        text-align: center;
        width: 60px;
    }
    .icon-box{
        width: 60px;
        height: 60px;
        background-color: #FF6498;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .msg-ab{
        padding: 20px 0;
        border-top: 1px #292831 solid;
         border-bottom: 1px #292831 solid;
        /* height: 120px; */
    }
    .msg-ab img{
        height: 120px;
        width: 100%;
    }
    .down{
        color: #ffffff;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px #292831 solid;
    }
    .load-btn{
        padding: 4px 25px;
        border: none;
        background-color: #FE2C55;
        color: #ffffff;
        border-radius: 2px;
    }
    .msg-list-box{
        padding-bottom: 50px;
        padding-top: 30px;
    }
    .msg-list{
        display: flex;
        padding: 10px 0;
    }
    .msg-list img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .user-des{
        /* border: 1px yellow solid; */
        flex: 1;
        height: 60px;
    }
    .user-des .top{
        font-size: 14px;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
        line-height: 25px;
    }
</style>