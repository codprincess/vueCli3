<template>
    <div class="upload">
        <div class="pub-top">
            <div class="back">
                <router-link tag="span" to="/publish" class="" >×</router-link>
            </div>
            <div><span>选择素材</span></div>
        </div>
        <div class="upload-tab">
            <div class="nav-bar">
                <div class="item"  @click="changeTab(0)" :class="tabIndex==0?'active':''">视频</div>
                <div class="item" @click="changeTab(1)" :class="tabIndex==1?'active':''">图片</div>
            </div>
            <div class="tab-warp">
                <div v-show="tabIndex===0" class="tab-content">
                    <div class="down-btn">
                        <a class="btn">
                            <input type="file" class="hide">
                            更多视频
                        </a>
                    </div>
                    <div class="tab-video" v-for="(item,index) in dataList" :key="index">
                        <div class="tab-v">
                            <video :src="item.url"></video>
                            <!-- <div class="sel-icon">√</div> -->
                        </div>
                        
                    </div>
                    <div class="no" hidden>暂无视频请上传</div>
                </div>
                <div v-show="tabIndex===1" class="tab-content">
                     <div class="down-btn">
                        <a class="btn">
                            <input type="file" class="hide">
                            更多视频
                        </a>
                    </div>
                   <div class="tab-pic">
                        <div class="tab-img">
                            <img src="../../static/image/avatar.jpg" alt="">
                            <div class="sel-icon" @click="seleImg"><span  v-if="select">√</span></div>
                        </div>
                         <div class="tab-img" >
                            <img src="../../static/image/avatar.jpg" alt="">
                            <div class="sel-icon">
                                <span  v-if="!select">√</span>
                            </div>
                        </div>
                   </div>
                    <div class="no" hidden>暂无图片请上传</div>
                </div>
            </div>
        </div>

        <!--发布页面-->
        <div class="edit-pub" v-if="editPub">
            <user-header title="发布" :hasBack="true" rightTxt=""></user-header>
            <div class="text-warp">
                <div class="text-box">
                    <div class="textarea-contr">
                        <textarea rows="5" cols="28" placeholder="写标题并使用合适的话题，能让更多人看到~"></textarea>
                        <button>#话题</button>
                        <button>@好友</button>
                    </div>
                    <div class="sele-img">
                        <img src="../../static/image/avatar.jpg" alt="">
                    </div>
               </div>
               <div class="edit-box">
                   <div class="edit-item">
                        <span class="label">{{path}}<span></span></span>
                        <span class="icon">→</span>
                    </div>
                    <div class="edit-item">
                        <span class="label"><span></span>谁可以看</span>
                        <span>公开<span class="icon">→</span></span >
                    </div>
               </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import AMap from 'AMap'
import userHeader from '../../components/header/userHeader'
export default {
    components:{
        userHeader
    },
   
    data(){
        return{
            path:'',
            editPub:true,
            imgId:0,
            select:false,
            tabIndex:1,
            imgList:[],
            dataList:[
                    {
                        id:"1",
                        url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
                    },
                    {
                        id:"2",
                        url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                    },
                    {
                        id:"3",
                        url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
                    },
                    {
                        id:"4",
                        url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"

                    },
                    {
                        id:"5",
                        url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
                    },
                    {
                        id:"6",
                        url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"

                    }
                ],
        }
    },
    created(){
        this.getLocationCity();
       this.pic='http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4?x-oss-process=video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast';
        console.log(this.pic)
    },
    methods:{
        changeTab(index){
            this.tabIndex = index
        },
        seleImg(){
            this.select = !this.select
        },

        getLocationCity(){
            let _this = this;
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    console.log('222',result);
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    _this.path = result.city
                }
                })
            })
        }

    }
}
</script>
<style scoped>
    .upload{background-color: #ffffff;}
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
    .upload-tab .nav-bar{
        display:flex;
        align-items: center;
    }
    .upload-tab .nav-bar .item{
       width: 50%;
       text-align: center;
       padding: 10px 0;
    }
    .upload-tab .nav-bar .active{
        border-bottom: 2px #FFDF0E solid;
    }
   .tab-content{
       display: flex;
      flex-flow: wrap;
   }
   .tab-video{
       width: 25%;
   }
   .tab-warp .tab-pic{
       display: flex;
   }
   .tab-img{width: 25%; position: relative;}
   .tab-pic .tab-img .sel-icon{
        position: absolute;
        top: 5%;
        color: #ffffff;
        width: 20px;
        text-align: center;
        right: 10px;
        border-radius: 50%;
        height: 20px;
        border: 1px #ccc solid;
        background: rgba(0, 0, 0, .3);
   }
   /* .sel-icon span{
       opacity: 0;
   } */
    .tab-img img{
        width: 100%;
    }
    .no{
        height: 100%;
        text-align: center;
        padding-top: 50%;
    }

    /**上传按钮 */
    .down-btn{
        /* height: 80px; */
        position: fixed;
        bottom: 60px;
        left: 20px;
    }
    .down-btn .btn{
        outline: none;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        padding: 12px 20px;
        border-radius: 30px;
        box-shadow: 3px 3px 3px#cccccc;
    }
    .down-btn .hide {
        position: absolute;
        display: block!important;
        width: 82px;
        opacity: 0;
    }
    /**editpub */
    .edit-pub{
        background:#161823 ;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        color: #ffffff;
    }
    .text-warp{
        padding: 0 10px;
        box-sizing: border-box;
    }
    .text-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
         border-bottom: 1px #292831 solid;
    }
    .textarea-contr{
       width: 80%;
    }
    .sele-img img{
        height: 130px;
       width: 100px;
    }
    .textarea-contr textarea{
        background:#161823 ;
        border: none;
        caret-color:#ffffff;
        color: #ffffff;
        font-size: 16px;
    }
    .textarea-contr textarea::placeholder{
        font-size: 16px;
        color: #666;
    }
    .textarea-contr button{
        border-radius: 4px;
        background: #393A44;
        border: none;
        padding: 6px 20px;
        color: #ffffff;
        margin-right: 10px;
    }
    .edit-box{
        color: silver;
        border-top: 1px #292831 solid;
    }
    .edit-item{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .edit-item .icon{
        margin-left: 10px;
        font-size: 20px;
    }
    .edit-item .label{
        color: #ffffff;
    }
    
</style>