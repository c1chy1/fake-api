<template>
  <div class=" border-solid border-b py-4 text-center justify-center grid grid-cols-4 font-bold text-base">

   <button @click="close" class="absolute right-4 top-1 text-xl">X</button>
    <p>Shopping Cart</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
  </div>
</template>
<script setup lang="ts">
const props =defineProps<{
  store: any

}>();


function close() {
  props.store.toggleCart(false)

}
</script>
<style scoped>

</style>