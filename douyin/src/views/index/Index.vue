<template>
    <div class="indexwarp">
        <top-bar></top-bar>
         <router-view />
    </div>
</template>
<script>
import TopBar from '../../components/index/TopBar'
export default {
    name:'index',
    components:{
        TopBar
    }
}
</script>
<style scoped>
    .indexwarp{
        background-color: #000000;
        /* position: absolute;
        top: 0;
        bottom: 0;
        left :0;
        right :0; */
        height: 100%;
    }
</style>