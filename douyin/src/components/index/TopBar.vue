<template>
    <div class="top-bar">
        <div class="left">
            <span class="iconfont icon-live"></span>
        </div>
        <div class="middle">
            <div class="item" @click="changeTop(0)"><span :class="topIndex==0?'active':''">同城</span></div>
            <div class="item" @click="changeTop(1)"><span :class="topIndex==1?'active':''">关注</span></div>
            <div class="item" @click="changeTop(2)"><span :class="topIndex==2?'active':''">推荐</span></div>
        </div>
        <div class="right">
            <span class="iconfont icon-sousuo"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TopBar',
    data(){
        return{
            topIndex:2
        }
    },
    methods:{
        changeTop(index){
            this.topIndex = index
        }
    }
}
</script>
<style scoped>
    .top-bar{
        width: 100%;
        height: 50px;
        display: flex;
        padding: 20px;
        font-size: 18px;
        box-sizing: border-box;
        color: #B6B1A8;
    }
    .left{width: 20%;}
    .left .iconfont{ font-size: 24px;}
    .middle{
        justify-items: center;display: flex;width: 60%;
    }
    .middle .item{ flex: 1;text-align: center;
    }
    .middle .item span{ padding: 10px 0px;}
    .right{
        width: 20%;
        text-align: right;
    }
    .right .icon-sousuo{
        padding-left:20px;
        font-size: 30px;
    }
    .middle .item .active{
        color: #ffffff;
        border-bottom: 3px solid #ffffff;
    }
</style>