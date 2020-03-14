<template>
    <div class="left-bar">
       <div class="left-item"><span>@特困女程序员</span></div>
       <div class="left-item"><span>全网最新的vuecli4实战抖音app</span></div>
       <div class="left-item music-item">
           <span class="iconfont icon-yinfu"></span> 
           <div class="music-name">
               <span data-text="特困女程序员原创">特困女程序员原创</span>
            </div>
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
        display: flex;
    }
    .icon-yinfu{
        display: block;
    }
    .music-name{
        margin-left: 5px;
        width: 150px;
        padding: 2px 0;
        white-space: nowrap;
        overflow: hidden;
    }
    .music-name span{
        display: inline-block;
        /*inline样式不能使用动画*/
        animation: scroll 5s linear infinite;
    }
    /**无缝的条件 */
    .music-name span::after{
        content: attr(data-text);
        margin-left: 30px;
    }
     @keyframes scroll {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(calc(-50% - 2em));
            /*总长的一半再加上margin-left的一半*/
        }
    }
</style>