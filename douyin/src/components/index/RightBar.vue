<template>
    <div class="right-bar">
        <div class="right-item">
            <div class="avatar-border">
                <img class="avatar" src="../../static/image/avatar.jpg" alt="">
                <span class="iconfont icon-jia"></span>
            </div>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-love-b"></span>
            <p class="des">18.0w</p>
        </div>
        <div class="item-icon">
             <span class="iconfont icon-pinglun"></span>
            <p class="des">14.0w</p>
        </div>
        <div class="item-icon">
             <span class="iconfont icon-share-fill"></span>
            <p class="des">16.0w</p>
        </div>
        <div class="right-item">
            <div class="music-boder">
                <img class="singer" src="../../static/image/avatar.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'RightBar',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
    .right-bar .right-item{
        height: 76px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right-bar .item-icon{
        height: 60px;
        width: 100%;
        text-align: center;
        padding-top: 12px;
    }
    .avatar-border{
        height: 55px;
        width: 55px;
        border: 1px #ffffff solid;
        border-radius:50% ;
        text-align: center;
        position: relative;
    }
    .avatar-border .avatar{
        width:54px;
        height:54px ;
        border-radius: 50%;
    }
    .avatar-border .icon-jia{
        color: #FE2C58;
        font-size: 22px;
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;

    }
    .item-icon .iconfont{
        font-size: 36px;
        color: #F5F4F2;
    }
    .des{
        color: #F5F4F2;
        padding-top: 5px;
        font-size: 12px;
    }
    .right-item .music-boder{
        height: 58px;
        width: 58px;
        background: #2F2F2F;
        border-radius:50% ;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: rond 6s 0s linear infinite;
    }
     .right-item .music-boder .singer{
        width:36px;
        height:36px ;
        border-radius: 50%;
     }
    @keyframes rond {
        0% {transform : rotate(0deg);}
        100% {transform : rotate(360deg);}
    }
    @-webkit-keyframes rond {
        0%{-webkit-transform : rotate(0deg);}
        100%{-webkit-transform : rotate(360deg);}
    }

</style>