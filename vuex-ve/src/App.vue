<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{count}}</h1>
    <h4>{{myCount}}</h4>
    <h5>{{username}}</h5> -->
    <!-- <button @click="increments">增加</button>
     <button @click="descrements">减少</button> -->
        <!-- <li><router-link to="/Products">跳转到商品页面</router-link></li> -->
    <router-view/>
  </div>
</template>

<script>
// import { mapState,mapMutations ,mapActions,mapGetters} from 'vuex'
export default {
  name: 'App',

  // computed:{
  //   //方法一获取count
  //   // count(){
  //   //   return this.$store.state.count
  //   // },
  //   //方法二辅助函数获取
  // //  ...mapState(['count','username']),
  //   //整理集合之后不能用以上的方式获取count或者username的值
  //   ...mapState({
  //     count:state=>{
  //       return state.app.count
  //     },
  //     username:state=>{
  //       return state.user.username
  //     }
  //   }),
  //   ...mapGetters(['myCount'])
    

  // },
  methods:{
    //获取执行方法的方式一
    // increments(){
    //   this.$store.commit('increment')
    // },
    // descrements(){
    //   this.$store.commit('descrement')
    // }

    //方法二
    //  ...mapMutations(['increment','descrement']),
    //  increments(){
    //    this.increment()
    //  },
    //  descrements(){
    //   this.descrement()
    // }

    //方法三
    // increments(){
    //   this.$store.state.count += 1;
    // },

    // descrements(){
    //   this.$store.state.count -= 1;
    // },

    // //获取复杂业务逻辑
    // ...mapActions(['myIncrement','myDescrement']),
    // increments(){
    //   this.myIncrement();
    // },

    // descrements(){
    //   this.myDescrement();
    // }


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
