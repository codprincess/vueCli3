<template>
  <div class="login">
    <div class="logo">
        <img src="../assets/logo.png" alt="logo"/>
    </div>
    <InputGroup 
        type="number" 
        v-model="phone" 
        placeholder="手机号"
        :btnTitle="btnTitle"
        :disabled="disabled"
        :error="error.phone"
    />

     <InputGroup 
        type="number" 
        v-model="verifyCode" 
        placeholder="验证码"
        :error="error.code"
    />
    <div class="login_des">
        
            新用户登录即自动注册，并表示已同意
            <a href="">
               《用户服务协议》
            </a>和
            <a href="">《隐私权政策》</a>
        
    </div>

    <div class="login_btn">
        <button>登录</button>
    </div>
  </div>
</template>
<script>
import InputGroup from '../components/inputGroup';
export default {
    name:"login",
    data(){
        return{
            phone:"",
            verifyCode:"",
            error:{},
            btnTitle:"获取验证码",
            disabled:false
        }
    },
    components:{
        InputGroup
    }
}
</script>

<style>
    .login{
        width: 100%;
        height: 100%;
        padding: 30px;
        box-sizing: border-box;
        background: #ffffff;
        /* text-align: center; */
    }
    .login .logo{
        text-align: center;
    }
    .logo img{
        height: 56px;
    }

    .login_des{
       margin-top: 12px;
        color: #999;
        font-size: 14px;
        line-height: 20px; 
    }
    .login_des a{
        color: #2395ff;
    }
    .login_btn button{
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 30px;
        border-radius: 4px;
        background: #4cd96f;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
        border: none;
        outline: none;
    }

</style>