<template>
<div id="video-list">
<swiper :options="swiperOption">
    <!-- 幻灯内容 -->
    <swiper-slide>slide1</swiper-slide>    
    <swiper-slide>slide2</swiper-slide> 
    <swiper-slide>slide1</swiper-slide>    
    <swiper-slide>slide2</swiper-slide> 
</swiper>
</div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'    //导入组件
    export default{
        name:'videoList',
        components: {
            swiper,          //定义组件
            swiperSlide
        },
        data(){
            return {
                swiperOption: {
                    direction:"vertical",
                    grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
                    mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
                    mousewheelControl: true, //同上
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
                    observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如windo
                }
            }
        },
     }
</script>
<style scoped>
    #video-list{
        height: 100%;
    }
    #video-list .swiper-container{
        height: 100%;
    }
</style>