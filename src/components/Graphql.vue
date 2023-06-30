
<template>
  <section>



    <select
            v-model="category"

    >
      <option
          value="">All</option>
      <option v-for="{ name, id  } of categories"
              :value="id">{{ name }}</option>
    </select>
<!--    <div

        v-for="{ id, name, slug  } in  getProducts"
             :key="id"
             :id="id"
             :data-index="id"

    >

<h1>{{ name }}</h1>
      <h1>{{ id }}</h1>

    </div>-->

    <div class="hello">
      <h1>{{ msg }}</h1>
      <h1>Made By Getters</h1>
      <div v-for="product in getProducts" :key="product.id">
        {{ product.title}}
        {{ product.price}}: EURO
      <h1> {{product.category.id}} : Category ID</h1>


      </div>
<!--      <h1>Made By Actions</h1>
      <div v-for="product in products" :key="id">
       {{product}}
      </div>-->
    </div>



  </section>

</template>

<script setup lang="ts">

import {onMounted, reactive, ref , computed , watch} from "vue";
import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client/core'
import {provideApolloClient} from '@vue/apollo-composable'
import {useCategories} from "@/stores/categories";
import {useProduct} from "@/stores/products";

import axios from "axios";

import {Product} from "@/models/product.model";
import {storeToRefs} from "pinia";
const store = useProduct();
const msg = ref("Welcome");
const getProducts = computed(() => {
  return store.getProducts;
});

const price = computed(() => {
  return store.$state.price;
});



console.log(price)

/*const products = computed(() => {
  return store.products.map(item => `${item.category.id} - ${item.title}`);
});*/

const products = computed(() => {
  return store.products
});



const categories = computed(() => {
  return store.categories;
});



onMounted(() => {
/*  store.fetchProducts();*/
  store.fetchCategories();
});
const id = ref(0)


console.log(products)

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.escuelajs.co/graphql'
})

/*
useCategories().getCategories()
useProducts().getProducts()
*/

const cache = new InMemoryCache()



const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provideApolloClient(apolloClient);

const categoriesArray = useCategories().categories

const category = ref(0)

const test3 =ref(null)

console.log(test3)

watch(category, async () => {

await store.fetchByCategories(category.value)

  console.log(getProducts)


})



</script>

<style scoped>


#grid {

  display: flex;
flex-direction: column;

}

img {
  width: 6rem;

}

</style>