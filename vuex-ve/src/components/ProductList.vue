<template>
    <ul>
        <li class="list" v-for="item in products" :key="item.id">
            {{item.title}}-{{item.price }}
            
            <button
                :disabled="!item.inventory"
                @click="addProductToCart(item)"
            >
             Add to cart
            </button>
        </li>
    </ul>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    //方式一
    // computed:{
    //     ...mapState({
    //         products:state=>{
    //             return state.products.all
    //         }
    //     })
        
    //  },
     //方式二看起来比较简洁
    computed: mapState({
        products: state => state.products.all
    }),
    created(){
        //获取到数据
        this.$store.dispatch('products/getAllProducts')
    },

    methods:{
        // addProductToCart(){
        //     this.$store.commit('addProductToCart')
        // }
        ...mapActions('cart',['addProductToCart'])
    },

    // methods: mapActions('cart', [
    //     'addProductToCart'
    // ]),

}
</script>
<style scoped>
    .list{
        list-style-type: none;
        height: 30px;
        line-height: 30px
    }
</style>