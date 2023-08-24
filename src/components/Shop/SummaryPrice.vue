
<template>
  <div class="flex flex-col text-right py-4 ">
    <hr class="h-px mt-8 bg-black border-0 dark:bg-gray-700">
  <h2 class="mt-3  font-bold">Summe: {{store.cartTotalPrice}} €</h2>
<h3 class="mt-3 font-bold">
  Menge: {{store.productQuantity }} Stck
</h3>
  </div>
</template>

<script setup lang="ts">
 defineProps<{
  store: any
}>();
</script>
