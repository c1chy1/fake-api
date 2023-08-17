
<template>


  <select
      v-model.number="category"

  >
    <option
        value="">Nothing</option>
    <option v-for="{ name, id  } of categories"

            :value="id">{{ name }}</option>


  </select>

<button @click="test">TEST</button>



<!--  <div v-if="loading">
    <h2>Loading</h2>
  </div>
  <div v-else-if="error">
    <h2>{{ error }}</h2>
  </div>
  <div v-else>
    <h2>Query Results</h2>

    <div v-for="product in  products">
      <div v-for=" item in product" :id="item.id"  :key="item.id" >

        <button @click="addToCart(item.id)" >BUY PRODUCT</button>
        <h1>{{item.id}}</h1>
      <h1 >{{item.title}}</h1>
        <h1> {{item.category.name}} : Category Name</h1>
        <h1> {{item.price}} EURO : Price</h1>
        <img  v-for="image in item.images" :src="image" >

      </div>
    </div>
  </div>-->


  <div id="cart">

    <div id="product" v-for="(product , index) in cart" >


      <h2>{{product}}</h2>
      <button @click="cart.splice(index, 1)">Remove</button>

    </div>

    Summary : {{store.getCartItems}}
  </div>


<!--  <div v-for="product in products" >

    <h1>{{product}}</h1>
&lt;!&ndash;    <h2>{{product.category.id}}</h2>
    <h2>{{product.category.name}}</h2>&ndash;&gt;
  </div>-->


</template>
<script async setup lang="ts">
import {provideApolloClient} from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache , createHttpLink } from '@apollo/client/core'
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useProductGraphQL} from "@/stores/graphql";
import Cart from "@/stores/cart";
import {apolloClient} from "@/apollo/apollo";
const itemsInCart = ref([]);
/* function  addToCart(productID: any) {

 store.addToCart(productID)


  console.log(cart.value)

}*/

const product = ref()

const addToCart = (productID:any) => {

  store.addToCart(productID)

};

function  addToCart2(productID: any) {

  Cart().addItem(productID)

  console.log(cart.value)

}

import { storeToRefs } from 'pinia'


// `name` and `doubleCount` are reactive refs
// This will also extract refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property


const store = useProductGraphQL();
provideApolloClient(apolloClient);

/*const { products } = storeToRefs(store)*/
// the increment action can just be destructured

const cart = computed(() => {
  return store.cart
});

const products = computed(() => {
  return store.$state.products;
});
/*const arrayProducts = [...products]*/
console.log(products)
store.fetchCategories()
/*store.fetchByCategories()*/




const category = ref(0)


function test() {


}
watch(category, async () => {


  await  store.fetchByCategories(category.value)



  console.log(products)


})

const categories = computed(() => {
  return store.categories;
});



const loading = computed(() => {
  return store.loading;
});

const error = computed(() => {
  return store.error;
});













</script>

<style scoped>

#cart {

  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  width: 50%;
  height: 6rem;

}

img {
  width: 6rem;

}
</style>