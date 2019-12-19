import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types ={
  SET_LOCAIONT:"SET_LOCAIONT",
  SET_ADDRESS:"SET_ADDRESS"
}
const state = {
  location:{},
  address:""
}

const getters = {
  location:state=>state.location,
  address:state=>state.address
}

const mutations = {
  [types.SET_LOCAIONT](state,location){
    if(location){
      state.location = location
    }else{
      state.location = null
    }
  },
  [types.SET_ADDRESS](state,address){
    if(address){
      state.address = address;
    }else{
      state.address = "";
    }
  }
}

const actions = {
  setLocation:({
    commit
  },location)=>{
    commit(types.SET_LOCAIONT,location)
  },
  setAddress:({
    commit
  },address)=>{
    commit(types.SET_ADDRESS,address)
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
