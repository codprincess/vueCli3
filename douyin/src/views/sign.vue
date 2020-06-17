<template>
    <div>
        <!--验证码登录-->
        <div v-show="signbox">
            <div class="sign">
            <div class="sign-header">
                <router-link tag="span" to="/" class="icon">×</router-link>
                <span>帮助</span>
            </div>
            <div class="sign-content">
                <div class="des">
                    <h2>登录后可展现自己</h2>
                    <p>登录即表明同意<a href="#">抖音协议</a>和<a href="#">隐私协议</a></p>
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
                        <input  @input="change" type="tel" v-model="phone" class="input-control" placeholder="请输入手机号">
                    </div>
                </div>
                <div class="not-sign">
                    <p>未注册的手机号验证通过后将自动注册</p>
                </div>
                <div class="code-btn">
                    <button  :disabled="disabled" @click="getCode" :class="[bg?'active':'']">获取短信验证码</button>
                </div>
                <div class="other-sign">
                    <span @click="toTp">密码登录</span>
                    <!-- <router-link tag="a" to='/tpsign'>密码登录</router-link> -->
                    <span @click="open">其他方式登录</span>
                </div>
            </div>
            <!--其他登录方式-->
            <transition name="up">
            <div class="mask" v-if="maskShow">
                <div class="oauth">
                    <ul>
                        <li class="oauth-item"><span></span>今日头条登录</li>
                        <li class="oauth-item"><span></span>QQ登录</li>
                        <li class="oauth-item"><span></span>微信登录</li>
                        <li class="oauth-item"><span></span>微博登录</li>
                        <li class="oauth-item" @click="closeMask">取消</li>
                    </ul>
                </div>
            </div>
            </transition>
        </div>
    </div>

    <!--获取验证码-->
    <div class="sign" v-show="codeBox">
        <div class="sign-header">
            <span @click="toCodepage" class="icon">←</span>
            <!-- <router-link to="/sign" tag="span" class="icon">←</router-link> -->
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>请输入验证码</h2>
                <p>验证码已通过短信发送至+86 <span>{{phone}}</span></p>
            </div>
            <div class="sign-box">
                
                <div class="inp">
                    <input @input="changeCode" type="tel" v-model="code" class="input-control" placeholder="请输入验证码">
                </div>
                <div class="sele" @click="getCode">
                    {{time}}
                </div>
            </div> 
            <div class="code-btn">
                <button @click="phCodeLogin" :disabled="disabled1" :class="[bg1?'active':'']" class="load-btn"> <div class="loads"></div>登录</button>
            </div>
           
        </div>
    </div>


    <!--手机密码登录-->
    <div class="sign" v-show="tpSign">
        <div class="sign-header">
            <!-- <router-link to="/sign" tag="span" class="icon">←</router-link> -->
            <span @click="goBack" class="icon">←</span>
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>手机号密码登录</h2>
            </div>
            <div class="sign-box" style="margin-top:30px">
                <!-- <div class="sele">
                    <select name="tel" class="sele-control" v-model="telEare">
                        <option value="">+86</option>
                        <option v-for="(item, index) in telList"
                            :value="index"
                            :key="index">
                            {{ item }}
                        </option>
                    </select>
                </div> -->
                <div class="inp" >
                    <input type="text" v-model="username" class="input-control" placeholder="请输入用户名"  >
                </div>
            </div>
           
            <div class="sign-box" style="margin-top:30px">
                 <div class="inp">
                    <input type="password" v-model="password" class="input-control" placeholder="请输入密码" >
                </div>
            </div>
             <div class="not-sign">
                 <p>登录即表明同意<a href="#">抖音协议</a>和<a href="#">隐私协议</a></p>
            </div>
            <div class="code-btn">
                <button @click="loginAction"  :class="'active'">登录</button>
            </div>
            <div class="other-sign">
                <span>忘记了？<router-link tag="a" to='/tpsign'>找回密码</router-link></span>
               
            </div>
        </div>
    </div>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            telEare:'',
            telList:['+1','+81','+44','+49','+65','+27','+30'],
            maskShow:false,
            phone:'',
            bg:false,
            disabled:true,
            bg1:false,
            disabled1:true,
            bg2:false,
            disabled2:true,
            signbox:true,
            tpSign:false,
            password:'',
            codeBox:false,
            time:60,
            code:'',
            username:''

        }
    },
    created(){
        // this.timer();
        this.getCode()
    },
    methods:{
        open(){
            this.maskShow = true;
        },
        closeMask(){
            this.maskShow = false;
        },
        //点击获取验证码
        getCode(){
            if(!this.disabled){
                this.codeBox = true;
                this.signbox = false;
                 this.$axios.post('users/sendCode',{phone:this.phone}).then(res=>{
                     console.log(res)
                     if(res.data.code== 200 ){
                        this.time = 60;
                        this.timer()
                        this.codes = res.data.mycode
                        console.log('111',this.codes)
                     }else{
                         this.time = '稍后重试';
                          this.$toast({
                                type:'error',
                                message:res.data.msg,
                                duration: 2000
                            })
                     }
                 })
            }
        },
        //检测验证码
        changeCode(e){
            this.code = e.target.value;
            if(this.code == this.codes){
                this.disabled1 = false;
                this.bg1= true
            }
        },
        //手机号验证码登录
        phCodeLogin(){
            this.$axios.post('users/codePhoneLogin',{phone:this.phone,code:this.code}).then(res=>{
                console.log('---',res);
                if(res.data.code == 200){
                    this.$toast({
                        type:'success',
                        message:res.data.msg,
                        duration: 2000
                    })
                    this.$router.push('/index');
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        
        //验证码倒计时
        timer(){
            if(this.time>0){
                this.time--;
                setTimeout(this.timer,1000);
            }else{
                //this.$router.push('/sign');
            }
        },
        change(e){
            this.phone = e.target.value;
            var regtel =/^1[345789]{1}\d{9}$/;
            if(regtel.test(this.phone)){
               this.bg = true;
               this.disabled = false;
            }else{
                this.bg = false;
                this.disabled = true;
            }
        },
        toCodepage(){
            this.codeBox = false;
            this.signbox = true;
        },
        toTp(){
            this.tpSign = true;
            this.signbox = false;
        },
        goBack(){
            this.tpSign = false;
            this.signbox = true;
            console.log(this.tpSign);
        },
        loginAction(){
            if(this.username == ''){
                this.$toast({
                    type:'error',
                    message:'用户名不能为空',
                    duration: 2000
                })
            }else if(this.password ==''){
               //console.log('密码不能为空')
               this.$toast({
                    type:'error',
                    message:'密码不能为空',
                    duration: 2000
                })
               return
            }else{
                this.disabled2 = false;
                this.bg2 = true;
                this.$axios.post('users/login',{username:this.username,password:this.password}).then(res=>{
                console.log('12345',res);
                if(res.data.code == 200){
                    this.$toast({
                        type:'success',
                        message:res.data.msg,
                        duration: 2000
                    })
                    let token_login = 1;
                    localStorage.setItem('token_login',token_login)
                    this.$router.push('/index');
                }else{
                    this.$toast({
                        type:'error',
                        message:res.data.msg,
                        duration: 2000
                    })
                }
            }).catch(err=>{
                console.log(err);
            })
            }
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
    }
    .des p{
        line-height: 50px;
        padding-bottom: 15px;
    }
    .des p a{
        color: #2E68A0;
        text-decoration: none;
        padding: 0 5px;
    }
    .sign-box{
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
    .code-btn .active{
        background-color: #FE2C55;
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

    /***遮罩层 */
    .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
    }
    .oauth{
        height: 48%;
        width: 100%;
        position: absolute;
        background-color: #fff;
        bottom: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-align: center;
    }
    .oauth .oauth-item{
        border-bottom: 1px #f5f5f5 solid;
        line-height: 63px;
    }
     .up-enter-active, .up-leave-active{
        transition: all .5s
    }
    .up-enter, .up-leave-to{
        opacity: 1;
        transform :translateY(100%);
    }
</style>