
<template>
  <button
      @keyup.enter="removeFromCart(product.id)"
      @click="removeFromCart(product.id)"
      class="button bg-white"
      ref="button"
  ><span class="hover:text-tertiary border uppercase font-semibold text-xs px-4 tracking-widest">Remove</span>

  </button>

</template>

<script setup lang="ts">

import type {Product} from "@/types/types";
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";

provideApolloClient(apolloClient);

const props = defineProps<{
  product: Product;
  store: any
}>();

const removeFromCart = (productID : any ) => {

  props.store.removeFromCart(productID)
  if (props.store.cart.length === 0) props.store.toggleCart(false)


};
</script>


<style scoped>

</style>