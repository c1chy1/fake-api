<template>

  <select class="border-2 border-black"
          v-model.number="category">
    <option v-for="{ name, id } of categories"
            :key="id"
            :value="id">{{ name }}
    </option>

  </select>

</template>
<script setup lang="ts">
import {watch, ref} from "vue";
import type {Category} from "@/types/types";



const props = defineProps<{
  categories: Category[],
  store: any
}>();


const category = ref(0)



watch(category, async () => {


  await props.store.fetchByCategories(category.value)


})

</script>