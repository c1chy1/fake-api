
<template>

<h3>
  Summary : {{store.productQuantity}}

  {{store.cartTotalPrice}} €</h3>

</template>

<script setup lang="ts">


import { ref, watch} from "vue";

const props = defineProps<{
  store: any
}>();


const price = ref(0)

watch(price, async () => {

  props.store.cartTotalPrice = price.value
})

</script>


<style scoped>

</style>

<style scoped>

</style>