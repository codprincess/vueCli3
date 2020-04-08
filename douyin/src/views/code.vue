<template>
    <div class="sign">
        <div class="sign-header">
            <router-link to="/sign" tag="span" class="icon">←</router-link>
            <span>帮助</span>
        </div>
        <div class="sign-content">
            <div class="des">
                <h2>请输入验证码</h2>
                <p>验证码已通过短信发送至+86 <span>15253623889</span></p>
            </div>
            <div class="sign-box">
                
                <div class="inp">
                    <input @input="changeCode" type="tel" v-model="code" class="input-control" placeholder="请输入验证码">
                </div>
                <div class="sele">
                    {{time}}
                </div>
            </div> 
            <div class="code-btn">
                <button :disabled="disabled" :class="[bg?'active':'']" class="load-btn"> <div class="loads"></div>登录</button>
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
            time:60,
            code:'',
            disabled:true,
            bg:false
        }
    },
    created(){
        this.timer();
        this.getCode()
    },
    methods:{
        //获取验证码
        getCode(){
            this.codes = '1234';
        },
        //检测验证码
        changeCode(e){
            this.code = e.target.value;
            if(this.code == this.codes){
                this.disabled = false;
                this.bg= true
            }
        },
        //验证码倒计时
        timer(){
            if(this.time>0){
                this.time--;
                setTimeout(this.timer,1000);
            }else{
                //this.$router.push('/sign');
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
        margin-bottom: 15px;
    }
    .des p{
        font-size: 14px;
        color: #666;
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
    .sele{
        color: #cccccc
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
    .load-btn{
        display: flex;
        justify-content: center
    }
    .loads{
        width:14px;
        height:14px;
        border:3px solid #ffffff;
        border-bottom:#aaa 3px solid;
        border-radius:50%;
        animation:load 1.1s infinite linear;
        -webkit-animation:load 1.1s infinite linear;
        -moz-animation:load 1.1s infinite linear;
        -o-animation:load 1.1s infinite linear;
        margin-right: 5px;
    }
   @keyframes load {
        from {
            transform:rotate(0deg);
            -ms-transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
            -ms-transform:rotate(360deg);
        }
        }@-webkit-keyframes load {
            from {
            -webkit-transform:rotate(0deg);
        }
        to {
            -webkit-transform:rotate(360deg);
        }
        }@-moz-keyframes load {
            from {
            -moz-transform:rotate(0deg);
        }
        to {
            -moz-transform:rotate(360deg);
        }
        }@-o-keyframes load {
            from {
            -o-transform:rotate(0deg);
        }
        to {
            -o-transform:rotate(360deg);
        }
    }
</style>