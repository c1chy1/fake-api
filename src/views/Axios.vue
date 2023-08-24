
<template>
  <section v-if="storeAxios">


    <ProductCategoryFilter :categories="categories"
                           :store="storeAxios"/>
    <Product :products="products"
    :store="storeAxios"
    />
    <ProductCart
        :store="storeAxios"/>


     <CartIcon :store="storeAxios"/>

  </section>

</template>

<script setup lang="ts">

import {onMounted, ref , computed} from "vue";
import {useProductAxios} from "@/stores/axios";
import ProductCategoryFilter from "@/components/Shop/ProductCategoryFilter.vue";
import Product from "@/components/Shop/Product.vue";
import ProductCart from "@/components/Shop/ProductCart.vue";
import CartIcon from "@/components/Shop/CartIcon.vue";


const isCartOpen = ref(false);
const storeAxios = useProductAxios();
const products = computed(() => {
  return storeAxios.products
});


const categories = computed(() => {
  return storeAxios.categories;
});


const showCart = () => {
  isCartOpen.value = true;
};

const hideCart = () => {
  isCartOpen.value = false;
};

onMounted(() => {
  console.log("Axios")

  const storeAxios = useProductAxios();

  storeAxios.fetchCategories();
});

</script>
