<template>
  <div class="home">

    <div class="header">
      <div class="address_map" @click="$router.push({name:'address',params:{city:city}})">
        <i class="fa fa-map-marker"></i>
          <span>{{address}}</span>
        <i class="fa fa-sort-desc"></i>
      </div>
    </div>

    <div class="search_warp">
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家  商家名称
      </div>
    </div>

    <div id="container">
      <!--轮播-->
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item v-for="(img,index) in swipeImgs" :key="index">
           <img alt="轮播图片" :src="img"/>
        </mt-swipe-item>
      </mt-swipe>

      <!--分类-->
      <mt-swipe :auto="0" class="entries">
        <mt-swipe-item v-for="(entry,i) in entries" :key="i" class="entry_wrap">
          <div class="foodentry" v-for="(item,index) in entry" :key="index">
            <div class="img_wrap">
              <img :src="item.image" alt />
            </div>
            <span>{{item.name}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!--商家推荐-->
    <div class="shoplist-title">推荐商家</div>
    <!--导航-->
    
  </div>
</template>
<script>
export default {
    name:"home",
    data(){
      return{
        swipeImgs:[],
        entries:[]
      }
    },
    computed:{
      address(){
        return this.$store.getters.address;
      }
    },

    created(){
      this.getDataAction();
    },
    methods:{
      getDataAction(){
        this.$axios("/api/profile/shopping").then(res=>{
          //console.log('获得的数据',res)
          this.swipeImgs = res.data.swipeImgs;
          this.entries = res.data.entries;
        })
      }
    }
}
</script>

<style scoped>
  .home {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}
.header,
.search_warp {
  background-color: #009eef;
  padding: 10px 16px;
}
.header .address_map {
  color: #fff;
  font-weight: bold;
}
.address_map i {
  margin: 0 3px;
  font-size: 18px;
}
.address_map span {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.search_warp .shop_search {
  /* margin-top: 10px; */
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}

.swiper {
  height: 100px;
}
.swiper img {
  width: 100%;
  height: 100px;
}
.entries {
  background: #fff;
  height: 47.2vw;
  text-align: center;
  overflow: hidden;
}
.foodentry {
  width: 20%;
  float: left;
  position: relative;
  margin-top: 2.933333vw;
}
.foodentry .img_wrap {
  position: relative;
  display: inline-block;
  width: 12vw;
  height: 12vw;
}
.img_wrap img {
  width: 100%;
  height: 100%;
}
.foodentry span {
  display: block;
  color: #666;
  font-size: 0.32rem;
}
</style>