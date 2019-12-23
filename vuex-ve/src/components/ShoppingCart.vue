<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!products.length"><i>Please add some products to cart.</i></p>
        <ul>
            <li class="list" v-for="product in products" :key="product.id">
                 {{ product.title }} - {{ product.price  }} x {{ product.quantity }}
            </li>
            <p>Total: {{ total  }}</p>
            <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
            <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
        </ul>
    </div>    
</template>
<script>
import {mapGetters,mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            checkoutStatus:state=>state.cart.checkoutStatus
        }),
        ...mapGetters('cart',{
            products:'cartProducts',
            total:'cartTotalPrice'
        })
    },
    methods: {
        checkout (products) {
        this.$store.dispatch('cart/checkout', products)
        }
    }

}
</script>
<style scoped>
 .list{
        list-style-type: none;
        height: 30px;
        line-height: 30px
    }
</style>