

<template>
  <div class=" border-solid border-b py-4 text-center justify-center grid grid-cols-4">

   <button @click="close" class="absolute left-0 top-0 text-xl">X</button>
    <p class=" text-xl font-bold">Shopping Cart</p>
    <p class=" text-xl font-bold">Title</p>
    <p class=" font-bold text-center">Price</p>
    <p class=" font-bold text-center">Quantity</p>
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