<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
     <button @click="increments">增加</button>
     <button @click="descrements">减少</button>
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
