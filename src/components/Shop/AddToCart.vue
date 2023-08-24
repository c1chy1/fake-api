
<template>

  <div v-if="store.loading" >

    <button
        class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest"
        :class="{ disabled: store.loading, open : 'loading' }"

        @click="addToCart(product.id)"
        type="button"
    >
      <slot />


  <LoadingSpinner :store="store"/>
    </button>

  </div>
  <div v-else >
    <button
        :class="{ disabled: store.loading , open : 'loading' }"
        class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest"
        type="button"
        @click="addToCart(product.id)"
    >
      <slot />
      <LoadingSpinner :store="store"/>
    </button>
  </div>
<!--  <button
      @keyup.enter="addToCart(product.id)"
      @click="addToCart(product.id)"
      class="button bg-white"
      :class="open ? 'loading' : ''"
      ref="open"
  >
    <span class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest">In Den Warenkorb</span>

  </button>-->

</template>

<script setup lang="ts">

import type {Product} from "@/types/types";
import {ref} from "vue";
import {provideApolloClient} from "@vue/apollo-composable";
import {apolloClient} from "@/apollo/apollo";
import LoadingSpinner from "@/components/Shop/LoadingSpinner.vue";

provideApolloClient(apolloClient);

const props = defineProps<{
  product: Product;
  store: any
}>();

const open = ref(false)


const addToCart = (productID:any) => {

  open.value = true
  props.store.toggleCart(true);
 props.store.addToCart(productID)
};
</script>


<style scoped>
.disabled {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed;
}

button {
  @apply relative w-48 h-12 px-4 py-2 mt-4 transition ease-in-out delay-75 duration-300 font-bold text-white bg-blue-500 rounded hover:bg-blue-800;
}

</style>