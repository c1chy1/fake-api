
<template>
  <button
      @keyup.enter="addToCart(product.id)"
      @click="addToCart(product.id)"
      class="button bg-white"
      :class="open ? 'loading' : ''"
      ref="button"
  >
    <span class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest">In Den Warenkorb</span>

  </button>

</template>

<script setup lang="ts">

import type {Product} from "@/types/types";
import {ref} from "vue";
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";
import cart from "@/stores/cart";



/*const store = useProductAxios();*/
provideApolloClient(apolloClient);

const props = defineProps<{
  product: Product;
  store: any
}>();

const open = ref(false)


const test = ref(0)

const addToCart = (productID:any) => {

  open.value = true
 props.store.addToCart(productID)

  console.log(props.store.cartTotalPrice)
};
</script>


<style scoped>

</style>