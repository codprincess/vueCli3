<template>
   <div>
     <h2>ProductList</h2>
     <ProductList />
      <hr>
    <ShoppingCart/>
   </div>
</template>
<script>
    import ProductList from '../components/ProductList'
    import ShoppingCart from '../components/ShoppingCart'
    export default {
        data(){
            return{

            }
        },
        components:{
            ProductList,
            ShoppingCart
        }
    }
</script>
<style>
    
</style>