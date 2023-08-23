

<template>
  <div id="cart" class="w-1/2 right-2 top-2">


    <div  class="product text-center" v-for="(product) in store.cart" :key="product.id">



    <ProductPrice :price="product.price"/>
    <ProductName  :title="product.title" text-direction="center"/>
      <ProductImage  v-for="image in product.images" :src="image" :alt="product.title"/>
      <ProductQuantity :quantity="product.quantity"/>
      <div class="flex flex-col">
    <ProductRemoveFromCart :product="product" :store="store" />
</div>


</div>


    <SummaryPrice  :store="store"/></div>

</template>
<script setup lang="ts">
 import ProductPrice from "@/components/Shop/ProductPrice.vue";
 import ProductName from "@/components/Shop/ProductName.vue";
 import ProductImage from "@/components/Shop/ProductImage.vue";
 import ProductRemoveFromCart from "@/components/Shop/ProductRemoveFromCart.vue";
 import SummaryPrice from "@/components/Shop/SummaryPrice.vue";
 import ProductQuantity from "@/components/Shop/ProductQuantity.vue";
 import LoadingSpinner from "@/components/Shop/LoadingSpinner.vue";



 const props = defineProps<{

   store:any
 }>();

 const store = props.store;

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