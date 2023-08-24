<template>
  <button
      class="fixed flex items-center justify-end right-5 bottom-5 z-[45]"
      aria-label="Cart"
      @click="handleClick"
      @keyup.enter="handleClick"
  >
    <img src="@/assets/cart.png" alt="cart" class="relative rounded-b-2xl" >
    <transition name="bounce">
<span  v-if="store.productQuantity"
       class="bg-[#FCFCFD] px-1 text-xs rounded-full absolute left-6 top-2.5 transition-all">
{{store.productQuantity}}
</span>
</transition>


  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  store: any;

}>();



function handleClick() {
  props.store.toggleCart();
}
</script>
