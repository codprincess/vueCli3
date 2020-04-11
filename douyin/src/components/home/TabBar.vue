<template>
    <div class="tar-bar">
        <div class="item" @click="changeTab(0)">
            <router-link to="/index" tag="span" :class="tabIndex==0?'active':''" >首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">关注</router-link>
        </div>
        <div class="item" @click="changeTab(2)">
            <router-link to="/publish" tag="span" :class="tabIndex==2?'active':''" >
                <img src="../../static/image/dy-btn.png" alt="" class="dy-btn">
            </router-link>
        </div>
        <div class="item"  @click="changeTab(3)">
            <router-link to="/message" tag="span" :class="tabIndex==3?'active':''">消息</router-link>
        </div>
        <div class="item" @click="changeTab(4)">
            <router-link to="/sign" tag="span" :class="tabIndex==4?'active':''">我</router-link>
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
     height: 50px;
     line-height: 50px;
     width: 100%;
     position: fixed;
     left: 0;
     bottom: 0;
     display: flex;
     color: #CCCAC7;
     font-size: 16px;
     justify-items: center;
     z-index: 1;
 }
 .tar-bar .item{
     flex: 1;
     text-align: center;
 }
 .dy-btn{
     width: 40px;
     height: 30px;
 }
 .tar-bar .item span{
     padding: 10px 0;
 }

 .tar-bar .item .active{
     /* border-bottom: 3px solid #ffffff; */
     color: #fff;
 }
</style>