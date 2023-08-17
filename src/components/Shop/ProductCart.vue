

<template>
  <div id="cart" class="w-1/2 right-2 top-2">

<div v-if="store.loading"> LOADING ...</div>

<div v-if="store.cart.length > 0" class="product text-center" v-for="(product, index) in store.cart" :key="product.id">

    <ProductPrice :price="product.price"/>
    <ProductName  :title="product.title" text-direction="center"/>
    <ProductImage v-for="image in product.images" :src="image" :alt="product.title"/>

  <ProductQuantity :quantity="product.quantity"/>

  <div class="flex flex-col">

    <ProductRemoveFromCart :product="product" :store="store" />


</div>
  <p>{{index}}</p>
</div>
    <SummaryPrice  :store="store"/></div>

</template>
<script setup lang="ts">
 import ProductPrice from "@/components/Shop/ProductPrice.vue";
 import ProductName from "@/components/Shop/ProductName.vue";
 import ProductImage from "@/components/Shop/ProductImage.vue";
 import ProductRemoveFromCart from "@/components/Shop/ProductRemoveFromCart.vue";
 import SummaryPrice from "@/components/Shop/SummaryPrice.vue";
 import {onMounted, ref} from "vue";
 import ProductQuantity from "@/components/Shop/ProductQuantity.vue";


 const props = defineProps<{

   store:any
 }>();

 const store = props.store;

onMounted(()=> {

  props.store.getCart


})
</script>
<style scoped>


img {

  width: 6rem;
  height: 6rem;

}

#cart {

  position: relative;
  right: 0;
  top: 0;
  z-index: 100;
  width: 50%;
  height: 6rem;

}

</style>