import shop from '../api/shop'
const products = {
    namespaced: true,
    state: {
        all:[]
    },
    getters: {

    },

    mutations: {
        setProducts(state,products){
            state.all = products
        },

        decrementProductInventory(state, { id }) {
            const product = state.all.find(product => product.id === id)
            product.inventory--
        }
    },

    actions:{
        //获取products数据
        getAllProducts({commit}){
            shop.getProducts(products=>{
                commit('setProducts',products)
            })
            console.log(products)
        },

        // decrementProductInventory(state,{id}){
        //     const product = state.all.find(product=>product.id === id)
        //     product.inventory--
        // }
    }
}

export default products