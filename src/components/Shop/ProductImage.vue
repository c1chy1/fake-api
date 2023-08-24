

<template>
  <div class="grid-cols-3">
  <img class=" w-16 h-16 bg-cover" :src="src" :alt="alt">
  </div>


</template>
<script setup lang="ts">
 defineProps<{

  alt?: string;
  src?: string;

}>();



</script>
<style scoped>


</style>