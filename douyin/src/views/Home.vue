<template>
    <div class="home">
        <router-view />
        <tab-bar></tab-bar>
    </div>
   
</template>
<script>
import TabBar from '../components/home/TabBar'
export default {
    name:'home',
    components:{
        TabBar
    }
}
</script>
<style scoped>
    .home{
        background: #000;
        height: 100%;
    }
</style>