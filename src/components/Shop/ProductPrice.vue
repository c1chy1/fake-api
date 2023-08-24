

<template>

  <h1 class="text-gray-700 font-bold text-xl">{{price}} €</h1>
</template>
<script setup lang="ts">
 defineProps<{
  price: number;
}>();


</script>
<style scoped>

</style>