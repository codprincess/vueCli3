<template>
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
                    <input type="tel" class="input-control" placeholder="请输入手机号">
                </div>
            </div>
            <div class="not-sign">
                <p>未注册的手机号验证通过后将自动注册</p>
            </div>
            <div class="code-btn">
                <button>获取短信验证码</button>
            </div>
            <div class="other-sign">
                <router-link tag="a" to='/tpsign'>密码登录</router-link>
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
</template>
<script>
export default {
    data(){
        return{
            telEare:'',
            telList:['+1','+81','+44','+49','+65','+27','+30'],
            maskShow:false
        }
    },
    methods:{
        open(){
            this.maskShow = true;
        },
        closeMask(){
            this.maskShow = false;
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