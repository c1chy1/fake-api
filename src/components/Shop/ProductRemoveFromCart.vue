
<template>
  <button
      @keyup.enter="removeFromCart(product.id)"
      @click="removeFromCart(product.id)"
      class="button bg-white"
      ref="button"
  ><span class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest">Remove</span>

  </button>

</template>

<script setup lang="ts">

import type {Product} from "@/types/types";
import {onMounted, ref} from "vue";
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";

provideApolloClient(apolloClient);

const props = defineProps<{
  product: Product;
  store: any
}>();

const cart =  ref([])

const price = ref(0)


onMounted(()=> {

  cart.value =  props.store.getCart
 price.value =  props.store.cartTotalPrice
})


const index = ref(0)


const removeFromCart = (productID : any ) => {


  console.log(props.product.id)


  props.store.removeFromCart(productID)
  cart.value =  props.store.getCart

  console.log(productID)

};
</script>


<style scoped>

</style>