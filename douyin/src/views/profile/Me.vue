<template>
    <div class="me">
        <div class="me-top" :style="bgPic">
            <div class="menu-box"><div @click="open" class="menu-icon"></div></div>
        </div>
       <div class="me-warp">
            <div class="me-content">
                <div class="info">
                    <img src="../../static/image/avatar.jpg" alt="">
                    <button @click="toEdit" class="edit-btn">编辑资料</button>
                    <button class="add-btn">+朋友</button>
                </div>
                <div class="des">
                    <h2>特困女程序员</h2>
                    <span>抖音号：123284374935</span>
                    <p>只有越努力，才不会觉得费力只有越努力，才不会觉得费力只有越努力，才不会觉得费力</p>
                </div>
                <div class="info-tag">
                    <span>23岁</span>
                    <span>上海浦东新区</span>
                    <span>+增加学校等标签</span>
                </div>
                <div class="info-tag2">
                    <span><a>22</a>获赞</span>
                    <span><a>22w</a>关注</span>
                    <span><a>2w</a>粉丝</span>
                </div>
                <div class="ab">
                    好好学习，天天向上
                </div>
            </div>
            <div class="me-tab">
                <div class="nav-bar">
                    <div class="item"  @click="changeTab(0)" :class="tabIndex==0?'active':''">作品9</div>
                    <div class="item" @click="changeTab(1)" :class="tabIndex==1?'active':''">动态9</div>
                    <div class="item" @click="changeTab(2)" :class="tabIndex==2?'active':''">喜欢16</div>
                </div>
                <div>
                    <div v-show="tabIndex===0" class="tab-content">
                    <div class="tab-img">
                        <!-- <img src="../../static/image/1.jpg" alt=""> -->
                        <img src="../../static/image/bg2.png" alt="">
                        <!-- <img src="../../static/image/2.png" alt=""> -->
                    </div>
                    </div>
                    <div v-show="tabIndex===1" class="tab-content">
                        <div class="tab-img">
                        <!-- <img src="../../static/image/1.jpg" alt=""> -->
                        <img src="../../static/image/bg2.png" alt="">
                        <!-- <img src="../../static/image/2.png" alt=""> -->
                    </div>
                    </div>
                    <div v-show="tabIndex===2" class="tab-content">
                        <div class="tab-img">
                        <!-- <img src="../../static/image/1.jpg" alt=""> -->
                        <img src="../../static/image/bg2.png" alt="">
                        <!-- <img src="../../static/image/2.png" alt=""> -->
                    </div>
                    </div>
                </div>
            </div>
       </div>
       <transition name="slider">
        <div class="me-model" v-if="showModel">
            <div class="model-item">
                <span class="iconfont icon-ico"></span><span>我的二维码</span>
            </div>
            <div class="model-item">
                <span class="iconfont icon-shoucang"></span><span>我的收藏</span>
            </div>
            <div class="model-item">
                <span class="iconfont icon-qianbao"></span><span>钱包</span>
            </div>
            <div class="model-item">
                <span class="iconfont icon-lianjie"></span><span>小程序</span>
            </div>
            <div class="model-item">
                <span class="iconfont icon-shuju"></span><span>创作者服务中心</span>
            </div>
            <div class="model-item">
                <span class="iconfont icon-san"></span><span>未成年保护工具</span>
            </div>
             <div class="model-item">
                <span class="iconfont icon-shezhi"></span><span>设置</span>
            </div>
            <div class="more">
                <div class="back" @click="close" ><span class="iconfont">←</span>返回</div>
                <div><span class="iconfont icon-gongnengguanli"></span>更多功能</div>
            </div>
        </div>
       </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bgPic:{
                backgroundImage:'url('+require('../../static/image/bg2.png')+')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'100% 100%'
            },
            tabIndex:0,
            showModel:false
        }
    },
    methods:{
        toEdit(){
            this.$router.push('/edit')
        },
        changeTab(index){
            console.log(index)
            this.tabIndex = index
        },
        open(){
            this.showModel = true
        },
        close(){
            this.showModel = false
        }
    }
}
</script>
<style scoped>
    .me-model{
        position: fixed;
        right: 0;
        top: 0;
        height: 100%;
        background: #101821;
        z-index: 1000;
        width: 60%;
        padding: 30px 20px 0 20px;
        color: #C5C5C8;
    }
    .model-item{
        line-height: 70px;
    }
    .model-item .iconfont{
        margin-right: 15px;
        font-size: 26px;
    }
    .more{
        padding: 40px 0px 0px 0;
        display: flex;
        justify-content: space-between;
    }
    .more .back{
        padding-right: 20px;
    }
     .slider-enter-active, .slider-leave-active{
        transition: all .5s
    }
    .slider-enter, .slider-leave-to{
        opacity: 1;
        transform :translateX(100%);
    }
    .me{
        position: relative;
    }
    .me-top{
        height: 160px;
        display: flex;
        justify-content: flex-end;
        padding: 20px;
    }
    .menu-box{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background:rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu-icon{
        padding: 5px 0;
        width: 20px;
        height: 2px;
        background: #ffffff;
        background-clip: content-box;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .me-warp{
        position: absolute;
        top: 140px;
        height: auto;
        width: 100%;
        background-color: #101821;
        box-sizing: border-box;
        color: #ffffff;
    } 
    .me-content{
        padding: 0 20px;
    } 
    .info{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .info img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-right: 25px;
    }
    .info .edit-btn,.add-btn{
        height: 40px;
        padding: 0 24px;
        background-color: #393842;
        border: none; 
        color: #ffffff;
    }
    .des{
        padding: 20px 0;
    }
    .des h2{
        font-size:24px;
        font-weight: bold;
    }
    .des span{
        padding: 10px 0 15px 0;
        display: block;
        color: #cccccc;
    }
    .des p{
        line-height: 24px;
        color: #cccccc;
    }
    .info-tag span{
        margin-right: 5px;
        background: rgba(0, 0, 0, .6);
        padding: 5px 8px;
        color: #cccccc;
        font-size: 14px;
    }
    .info-tag2{
        padding: 20px 0;
    }
    .info-tag2 span{
        font-size: 14px;
        margin-right: 15px;
        color: #cccccc;
    }
    .info-tag2 a{
        color: #ffffff;
        font-size: 16px;
        margin-right: 5px;
    }
    .ab{
        background-color: #FE2C55;
        padding: 10px 0;
        text-align: center;
        border-radius: 4px;
    }
    .me-tab{
        color: #ffffff;
        /* height: 300px; */
    }
    .me-tab .nav-bar{
        display:flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    }
    .me-tab .nav-bar .item{
        padding: 10px 25px;
    }
    .me-tab .nav-bar .active{
        border-bottom: 2px #FFDF0E solid;
    }
    .tab-img img{
        width: 33.3%;
        /* height: 190px; */
    }
</style>