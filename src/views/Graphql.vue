<template>
  <section>

    <!--<Categories/>-->

    <ProductCategoryFilter :categories="categories"
                           :store="storeGraphql"

    />
    <div class="flex w-full">
    <Product :products="products"
    :store="storeGraphql"

    />
<ProductCart :store="storeGraphql"/>


    </div>
  </section>

</template>

<script setup lang="ts">
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";
import {computed, onMounted, ref} from "vue";
import ProductCategoryFilter from "@/components/Shop/ProductCategoryFilter.vue";
import Product from "@/components/Shop/Product.vue";
import {useProductGraphQL} from "@/stores/graphql";
import ProductCart from "@/components/Shop/ProductCart.vue";

import cart from "@/stores/cart";


provideApolloClient(apolloClient);

const storeGraphql = useProductGraphQL();




function f() {


  console.log(storeGraphql.products)

}


onMounted(()=> {
  storeGraphql.fetchCategories()

})
const categories = computed(() => {
  return storeGraphql.categories;
});

const products = computed(() => {
  return storeGraphql.$state.products;
});

</script>
<style scoped>

</style>