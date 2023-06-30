
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
      <div v-for="product in products" :key="product.id">
        {{ product.title}}
        {{ product.price}}: EURO

        <h1> {{product.category.name}}</h1>
        <p> {{product.description}}</p>
        <h1> {{product.category.id}} : Category ID</h1>
        <img  v-for="image in product.images" :src="image" >


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
const store = useProduct();
const msg = ref("Welcome");



const products = computed(() => {
  return store.products
});


const categories = computed(() => {
  return store.categories;
});



onMounted(() => {
  store.fetchCategories();
});
const id = ref(0)


console.log(products)

const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.escuelajs.co/graphql'
})

const cache = new InMemoryCache()



const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

provideApolloClient(apolloClient);

const category = ref(0)


watch(category, async () => {

  await store.fetchByCategories(category.value)

  console.log(products)


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