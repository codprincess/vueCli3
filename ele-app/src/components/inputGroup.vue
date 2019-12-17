<template>
  <div class="text_group">
    <!--组件结构-->
    <!--组件容器-->
    <div class="input_group">
      <!--输入框-->
      <input 
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :name="name"
        @input="$emit('input',$event.target.value)"  
      >
      <!--输入框后面的按钮-->
      <button class="verfy_btn" v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
      <!--错误提示-->
      <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
  </div>
</template>
<script>
export default {
    name:"inputGroup",
    props:{
      type:{
        type:String,
        default:"text"
      },
      value:String,
      placeholder:String,
      name:String,
      btnTitle:String,
      disabled:Boolean,
      error:String
    }
}
</script>

<style scope>
  .text_group{
    margin-top: 40px;
  }
  .input_group{
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }
  .input_group input{
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
  }
 .input_group .verfy_btn{
   position: absolute;
    top: 15px;
    right: 10px;
   border: none;
   outline: none;
   padding: 0;
    border-radius: 6px;
    background: transparent;
    text-align: center;
    font-size: 14px;
    
 }
 .input_group .verfy_btn[disabled]{
   color: #ccc;
 }
 .invalid-feedback{
   color: red;
   padding-top: 5px;
 }
</style>