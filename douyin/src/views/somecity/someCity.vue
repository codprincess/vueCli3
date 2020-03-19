<template>
    <div class="some-city">
        <div class="city">
            <span>默认位置：上海</span>
            <span>切换></span>
        </div>
        <div class="ad">
            <img src="../../static/image/bg.png" alt="ad">
        </div>
        <div class="player-list">
            <waterfall :col='col' :data="data" @loadmore="loadmore">
                <template>
                    <div v-for="(item,index) in data" :key="index">
                        <div class="video-item">
                            <videos ref="videos" :videoList="item" ></videos>
                            <div class="video-title">啦啦啦又来写前端</div>
                        </div>
                    </div>
                </template>
            </waterfall>
        </div>
    </div>
</template>
<script>
import Videos from '../../components/index/Videos.vue'
export default {
    data(){
        return{
            col:2,
             data:[
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

                    }
                ],
        }
    },
    components:{
        Videos
    },
    methods:{
        loadmore(){
            this.data = this.data.concat(this.data)
        }
    }
}
</script>
<style scoped>
    .some-city{
        height: 100%;
        padding: 60px 10px 0 10px;
        /* background: #ffffff; */
        color: #ffffff;
    }
    .city{
        display: flex;
        justify-content: space-between;
        padding: 20px 10px;
    }
    .ad img{
        width: 100%;
        height: 150px;
    }
    .video-item{
        padding: 10px 2px;
    }
    .video-title{
        padding: 5px 0;
        font-size: 18px;
    }
</style>