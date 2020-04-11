<template>
    <div class="publish">
        <div class="pub-top">
            <div class="back">
                <router-link to="/" tag="span" class="" >×</router-link>
            </div>
            <div><span>选择音乐</span></div>
        </div>
        <div class="upload-box">
            <div class="upload-bar">
                <div class="bar-item">
                    <div class="icon"></div>
                    <p>道具</p>
                </div>
                <div class="bar-item">
                    <div class="pub-border"><div class="pub"></div></div>
                </div>
                <div class="bar-item" @click="toUpload">
                    <div class="icon"></div>
                    <p>上传</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        toUpload(){
            this.$router.push('/upload')
        }
    }
}
</script>
<style scoped>
    .publish{
        background-color: #ffffff;
        color: #cccccc;
    }
    .pub-top{
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: center;
        color: #cccccc;
        font-size: 16px;
        position: relative;

    }
    .back{
        position: absolute;
        left: 10px;
    }
    .back span{
        font-size: 28px;
    } 
    .upload-bar{
        position: fixed;
        bottom: 0;
        display: flex;
        height: 100px;
        justify-content: space-between;
        width: 100%;
        padding: 0 50px;
        box-sizing: border-box;
    }
    .bar-item .icon{
        width: 35px;
        height: 35px;
        border-radius: 5px;
        border:1px red solid;
        margin-bottom: 5px;
    }
    .pub-border{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55px;width: 55px;
        border-radius: 50%;
        border: 1px #FE2C55 solid;
        box-shadow:-5px 0 5px #FE2C55, /*左边阴影*/
        5px 0 5px #FE2C55, /*右边阴影*/
        0 -5px 5px #FE2C55, /*顶部阴影*/
        0 5px 5px #FE2C55; /*底边阴影*/

    }
    .bar-item .pub{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: #FE2C55;
    }
</style>