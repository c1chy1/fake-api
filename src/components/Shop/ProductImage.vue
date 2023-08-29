
<template>
  <img class=" w-16 h-16 bg-cover" :src="src" :alt="alt">

</template>
<script setup lang="ts">
 defineProps<{

  alt?: string;
  src?: string;

}>();

</script>
