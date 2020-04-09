<template>
    <div class="user-header">
        <div class="back" v-if="hasBack">
            <span class="" @click="goBack">←</span>
        </div>
        <div><span>{{title}}</span></div>
        <div class="save" v-if="hasSave">
            <span class="" @click="goSave">{{rightTxt}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        rightTxt:{
            type:String,
            required:true
        },
        hasSave:{
            type:Boolean,
            default:false
        },
         hasBack:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            this.$emit('changeBack')
        },
        goSave(){
            this.$emit('changeSave')
        }
    }
}
</script>
<style scoped>
    .user-header{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: center;
        color: #eeeeee;
        font-size: 16px;
        border-bottom: 1px #292831 solid;
        background-color: #101821;
        position: relative;
    }
    .back{
        position: absolute;
        left: 10px;
    }
    .save{
        position: absolute;
        right: 10px;
    }
    .back span{
        font-size: 24px;
    }
</style>