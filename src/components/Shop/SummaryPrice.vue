
<template>
  <div class="flex flex-col text-right py-2 mr-8">
  <h2 class="mt-3  font-bold">Summe: {{store.cartTotalPrice}} €</h2>
<h3 class="mt-3 font-bold">
  Menge: {{store.productQuantity}}
</h3>
  </div>
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
