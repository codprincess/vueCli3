import Vue from 'vue'
import toast from './toast.vue'
let Toast = Vue.extend(toast)
let instance
//设置定时器
let timer = null
//设置参数
let toastMsg = (options)=>{
    if (!instance){
        //创建实例
        instance = new Toast()
        //将实例挂载到页面上
        document.body.append(instance.$mount().$el)
    }
    //定义默认停留时间
    instance.duration = 3000
    if(typeof options === 'string'){
        instance.message = options
    }else if(typeof options === 'object'){
        instance.type = options.type
        instance.message = options.message
        instance.duration = options.duration || 3000
    } else{
        return
    }
    instance.show = true
    timer = setTimeout(()=>{
        instance.show = false
        clearTimeout(timer)
        timer = null
    },instance.duration)

}
export default toastMsg