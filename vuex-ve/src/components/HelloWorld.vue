<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{count}}</h1>
    <h4>{{myCount}}</h4>
    <h5>{{username}}</h5>
     <button @click="increments">增加</button>
     <button @click="descrements">减少</button>
     <hr>

      <div><router-link to="/Products">跳转到商品页面</router-link></div>

  </div>
</template>

<script>
import { mapState,mapMutations ,mapActions,mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   computed:{
    //方法一获取count
    // count(){
    //   return this.$store.state.count
    // },
    //方法二辅助函数获取
  //  ...mapState(['count','username']),
    //整理集合之后不能用以上的方式获取count或者username的值
    ...mapState({
      count:state=>{
        return state.app.count
      },
      username:state=>{
        return state.user.username
      }
    }),
    ...mapGetters(['myCount'])
    

  },
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

    //获取复杂业务逻辑
    ...mapActions(['myIncrement','myDescrement']),
    increments(){
      this.myIncrement();
    },

    descrements(){
      this.myDescrement();
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
