<template>
    <div class="left-bar">
       <div class="left-item"><span>@特困女程序员</span></div>
       <div class="left-item"><span>全网最新的vuecli4实战抖音app</span></div>
       <div class="left-item music-item">
           <span class="iconfont icon-yinfu"></span> 
           <span class="music-name">特困女程序员原创</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

}
</script>
<style scoped>
    .left-bar{
        color: #ffffff;
        font-size: 14px;
        padding-left: 10px;
    }
    .left-bar .left-item{
        padding: 6px 0;
    }
    .music-item{
        width: 80%;
        border: 1px red solid;
        position: relative;
    }
    .icon-yinfu{
        display: block;
    }
    .music-name{
        margin-left: 5px;
        border: 1px green solid;
        width: 70%;
        right: -10%;
        bottom: 0;
        position: absolute;     
        -webkit-animation: scollLeft 5s linear 0s infinite;
    }
     @-webkit-keyframes scollLeft {
        from {
            right: -50%;
        }
        to {
            right: 10%;
        }
    }
</style>