

<template>

  <img :src="src" :alt="alt"


  >
</template>
<script setup lang="ts">
 defineProps<{

  alt?: string;
  src?: string;

}>();



</script>
<style scoped>


img {

  width: 6rem;
  height: 6rem;

}
</style>