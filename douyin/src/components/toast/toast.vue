<template>
    <div class="toast-box">
    <transition name="toast">
        <div class="toast" v-show="show" :class="type">
            <p>{{message}}</p>
        </div>
    </transition>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            show:false,
            type:'',
            message:''
        }
    }
}
</script>
<style scoped>
.toast-box{
    background: #ffffff;
}
.toast{
    position: fixed;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);
    padding: 5px 10px;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    line-height: 18px;
}
.success{
  background-color: rgba(28,204,11,.5);
}
.error{
  background-color: rgba(255,0,18,.9);
}
.toast-enter-to,.toast-leave{
  opacity: 1;
}
.toast-enter-active,.toast-leave-active{
  transition: all ease 0.5s;
}
.toast-enter,.toast-leave-to{
  opacity: 0;
}

</style>