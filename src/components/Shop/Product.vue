

<template>


  <div class="w-full grid grid-cols-3 gap-5 px-12 content-center items-center">
    <article
        class="py-6 flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden content-center justify-center " v-for="product in products" :key="product.id">
      <div class="flex-col">
          <ProductImage v-for="image in product.images" :key="image" :src="image" :alt="product.title"/>
        </div>
        <div class="w-3/4 p-4 ">
          <ProductName text-size="big" :title="product.title" text-direction="center"/>
          <ProductDescription text-size="medium" text-direction="left" :description="product.description"/>
          <div class="flex item-center justify-between mt-3 items-center">
            <ProductPrice :price="product.price"/>
         <AddToCart :product="product" :store="store"/>
          </div>

      </div>
    </article>
  </div>
</template>
<script setup lang="ts">

import type {Product} from "@/types/types";
import ProductName from "@/components/Shop/ProductName.vue";
import ProductImage from "@/components/Shop/ProductImage.vue";
import ProductPrice from "@/components/Shop/ProductPrice.vue";
import AddToCart from "@/components/Shop/AddToCart.vue";
import ProductDescription from "@/components/Shop/ProductDescription.vue";

defineProps<{
  products:Product[],
  store: any
}>();

</script>
