import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'
Vue.use(Vuex)
const types = {
    SET_ADDRESS = 'SET_ADDRESS',
}
const state = {
    address:'',
}
const getters = {
    address:state=>state.address,
}
const mutations = {
    [types.SET_ADDRESS](state,address){
        if(address){
            state.address = address;
        }else{
            state.address =''
        }
    }
}

const actions = {
    setAddress:({
        commit
    },address)=>{
        commit(types.SET_ADDRESS,address);
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})