<template>
    <div class="tar-bar">
        <div class="item" @click="changeTab(0)">
            <router-link to="/index" tag="span" :class="tabIndex==0?'active':''" >首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">关注</router-link>
        </div>
        <div class="item" @click="changeTab(2)">
            <router-link to="/index" tag="span" :class="tabIndex==2?'active':''" >+</router-link>
        </div>
        <div class="item"  @click="changeTab(3)">
            <router-link to="/index" tag="span" :class="tabIndex==3?'active':''">消息</router-link>
        </div>
        <div class="item" @click="changeTab(4)">
            <router-link to="/index" tag="span" :class="tabIndex==4?'active':''">我</router-link>
        </div>

    </div>
</template>
<script>
export default {
    name:'TabBar',
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        changeTab(index){
            this.tabIndex = index
        }
    }
}
</script>
<style scoped>
 .tar-bar{
     height: 44px;
     line-height: 44px;
     width: 100%;
     background: rgba(0, 0, 0, 0.85);
     position: fixed;
     left: 0;
     bottom: 0;
     display: flex;
     color: #CCCAC7;
     font-size: 16px;
     justify-items: center;
 }
 .tar-bar .item{
     flex: 1;
     text-align: center;
 }
 .tar-bar .item span{
     padding: 10px 0;
 }

 .tar-bar .item .active{
     /* border-bottom: 3px solid #ffffff; */
     color: #fff;
 }
</style>