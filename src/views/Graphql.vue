<template>
  <section >

    <ProductCategoryFilter :categories="categories"
                           :store="storeGraphql"/>
    <Product :products="products"
    :store="storeGraphql"

    />
<ProductCart :store="storeGraphql"/>

    <CartIcon :store="storeGraphql"/>
  </section>

</template>

<script setup lang="ts">
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";
import {computed, onMounted } from "vue";
import ProductCategoryFilter from "@/components/Shop/ProductCategoryFilter.vue";
import Product from "@/components/Shop/Product.vue";
import {useProductGraphQL} from "@/stores/graphql";
import ProductCart from "@/components/Shop/ProductCart.vue";
import LoadingSpinner from "@/components/Shop/LoadingSpinner.vue";
import CartIcon from "@/components/Shop/CartIcon.vue";



provideApolloClient(apolloClient);

const storeGraphql = useProductGraphQL();

onMounted(()=> {
  storeGraphql.fetchCategories()

})


const categories = computed(() => {
  return storeGraphql.$state.categories
});

const products = computed(() => {
  return storeGraphql.$state.products;
});

</script>
<style scoped>

</style>