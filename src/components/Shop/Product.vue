

<template>
  <div class="w-1/2">


  <article class="product flex-col flex" v-for="product in products" :key="product.id">

    <ProductName :title="product.title" text-direction="center"/>
    <ProductImage v-for="image in product.images" :src="image" :alt="product.title"/>
    <ProductPrice :price="product.price"/>
    <AddToCart
        :product="product"
        :store="store"
    />

  </article>
  </div>
</template>
<script setup lang="ts">

import type {Product} from "@/types/types";
import ProductName from "@/components/Shop/ProductName.vue";
import ProductImage from "@/components/Shop/ProductImage.vue";
import ProductPrice from "@/components/Shop/ProductPrice.vue";
import AddToCart from "@/components/Shop/AddToCart.vue";


defineProps<{
  products:Product[],
  store: any
}>();



</script>
<style scoped>

</style>