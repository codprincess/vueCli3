<template>
    <div class="user-edit">
       <user-header title="编辑资料" :hasSave="false" @changeBack="back"></user-header>
       <div class="edit-warp">
           <div class="ava-box">
               <div class="avatar">
                   <img src="../../static/image/avatar.jpg" alt="">
                   <span class="iconfont icon-live"></span>
                   <input class="avatar-input" type="file">
                </div>
               <p>点击更换头像</p>
           </div>
           <div class="edit-box">
               <div class="edit-item">
                   <span class="label">名字</span>
                   <span>傻啦吧唧<span class="icon">→</span></span>
               </div>
               <div class="edit-item">
                   <span class="label">抖音号</span>
                   <span>7342883274<span class="icon">→</span></span>
               </div>
               <div class="edit-item">
                   <span class="label">简介</span>
                   <span>越努力越幸运<span class="icon">→</span></span>
               </div>
                <div class="edit-item">
                   <span class="label">学校</span>
                   <span>点击设置<span class="icon">→</span></span>
               </div>
                <div class="edit-item">
                   <span class="label">性别</span>
                   <span>女<span class="icon">→</span></span>
               </div>
                <div class="edit-item">
                   <span class="label">生日</span>
                   <span>1845-8-4<span class="icon">→</span></span>
               </div>
                <div class="edit-item">
                   <span class="label">地区</span>
                   <span>中国最富垃圾场<span class="icon">→</span></span>
               </div>
                <div class="edit-item">
                   <span class="label">头像挂件</span>
                   <span>点击设置<span class="icon">→</span></span>
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
    },
    methods:{
        back(){
            this.$router.push('/me')
        }
    }
}
</script>
<style scoped>
    .user-edit{
        background-color: #101821;
    }
    .edit-warp{
        padding: 0 10px;
        box-sizing: border-box;
    }
    .ava-box{
        color: #cccccc;
        text-align: center;
        padding: 20px;
    }
    .avatar{ position: relative;}
    .avatar img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 16px;
        opacity: .5;
    }
    .avatar .iconfont{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) ;
        font-size: 26px;
        color: #ffffff;
    }
    .avatar-input{
        position: absolute;
        left: 36%;
        top: 36%;
        width: 50%;
        opacity: 0;
    }
    .edit-box{
        color: silver;
        border-top: 1px #292831 solid;
    }
    .edit-item{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .edit-item .icon{
        margin-left: 10px;
        font-size: 20px;
    }
    .edit-item .label{
        color: #ffffff;
    }
</style>