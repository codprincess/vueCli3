<template>
    <div class="sign">
        <div class="sign-header">
            <router-link to="/sign" tag="span" class="icon">←</router-link>
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>手机号密码登录</h2>
            </div>
            <div class="sign-box">
                <div class="sele">
                    <select name="tel" class="sele-control" v-model="telEare">
                        <option value="">+86</option>
                        <option v-for="(item, index) in telList"
                            :value="index"
                            :key="index">
                        {{ item }}
                        </option>
                    </select>
                </div>
                <div class="inp">
                    <input type="tel" class="input-control" placeholder="请输入手机号">
                </div>
            </div>
           
            <div class="sign-box">
                 <div class="inp">
                    <input type="tel" class="input-control" placeholder="请输入密码">
                </div>
            </div>
             <div class="not-sign">
                 <p>登录即表明同意<a href="#">抖音协议</a>和<a href="#">隐私协议</a></p>
            </div>
            <div class="code-btn">
                <button>登录</button>
            </div>
            <div class="other-sign">
                <span>忘记了？<router-link tag="a" to='/tpsign'>找回密码</router-link></span>
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            telEare:'',
            telList:['+1','+81','+44','+49','+65','+27','+30']
        }
    }
}
</script>
<style scoped>
    .sign{
        padding: 30px;
        background-color:#fff;
    }
    .sign-header{
        display: flex;
        justify-content: space-between;
    }
    .sign-header .icon{
        font-size: 30px;
    }
    .sign-content{
        padding: 40px 10px;
    }
    
    .des h2{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 30px;
    }
   
    .not-sign p a{
        color: #2E68A0;
        text-decoration: none;
        padding: 0 5px;
    }
    .sign-box{
        margin-top: 10px;
        height: 50px;
        display: flex;
        background-color: #F9F9F9;
        align-items: center;
    }
    .sele-control{
        background-color: #F9F9F9;
        height: 36px;
        font-weight: bold;
        border: none;
        margin-left: 5px;
    }
    .input-control{
        height: 30px;
        background-color: #F9F9F9;
        border: none;
        margin-left: 10px;
        font-size:20px ;
        width: 90%;
    }
    input::-webkit-input-placeholder{
        color:#ccc;
        font-size:16px 
    }
    input{
        caret-color:red;
        /* font-size: 3px; */
    }
    .not-sign p{
        margin-top: 10px;
        color: #cccccc;
        font-size: 14px;
    }
    .code-btn button{
        margin: 20px 0;
        width: 100%;
        padding: 10px 0;
        border: none;
        background-color: #D8D8DA;
        color: #fff;
    }
    .other-sign{
        display: flex;
        justify-content: space-between;
    }
    .other-sign a{
        color: #2E68A0;
        text-decoration: none;
    }
</style>