
<template>

  <Navigation/>
  <router-view v-slot="{ Component }">
    <main>
        <component :is="Component"></component>
    </main>
    </router-view>

</template>


<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";

</script>

<style scoped>

</style>
