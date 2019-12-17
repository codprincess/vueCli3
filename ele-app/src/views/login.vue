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
        :error="errors.phone"
        @btnClick="getVerifyCode"
    />

     <InputGroup 
        type="number" 
        v-model="verifyCode" 
        placeholder="验证码"
        :error="errors.code"
    />
    <div class="login_des">
        
            新用户登录即自动注册，并表示已同意
            <a href="">
               《用户服务协议》
            </a>和
            <a href="">《隐私权政策》</a>
        
    </div>

    <div class="login_btn">
        <button :disabled="isClick" @click="loginAction()">登录</button>
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
            errors:{},
            btnTitle:"获取验证码",
            disabled:false
        }
    },
    components:{
        InputGroup
    },
    computed: {
        isClick(){
            if(!this.phone || !this.verifyCode) return true;
            else return false;
        }
    },

    methods: {
        loginAction(){
            this.$axios.post("/api/posts/sms_back",{
                phone:this.phone,
                code:this.verifyCode
            }).then(res=>{
                //校验成功，设置登录状态并且跳转
                localStorage.setItem('app_login',res.data.user._id);
                this.$router.push("/");
            }).catch(err=>{
                this.errors = {
                    code:err.response.data.msg
                }
            })
        },

        validatePhone(){
            //验证手机号
            if(!this.phone){
                this.errors = {
                    phone:'手机号码不能为空'
                }
                return false;
            }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                this.errors = {
                    phone:"请填写正确的手机号"
                }
                return false;
            }else{
                this.errors = {};
                return true
            }
        },

        //验证码倒计时
        validateBtn(){
            let time = 60;
            let timer = setInterval(()=>{
                if(time == 0){
                    clearInterval(timer);
                    this.btnTitle = "获取验证码";
                    this.disabled = false;
                }else{
                    //倒计时开始
                    this.btnTitle = time + "秒后重试";
                    this.disabled = true;
                    time--;
                }
            },1000)
        },
        //获取验证码
        getVerifyCode(){
            if(this.validatePhone()){
                this.validateBtn();
                this.$axios.post("/api/posts/sms_send",{
                    tpl_id:'185342',
                    key:"e749c7f176d589c7016bbd734f85e6f4",
                    phone:this.phone
                }).then(res=>{
                    console.log(res)
                })

            }
        }


    },
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

    .login_btn button[disabled] {
        background-color: #8bda81;
    }

</style>