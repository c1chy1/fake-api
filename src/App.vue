
<template>


<!--<Graphql></Graphql>-->
  <Navigation/>
  <router-view v-slot="{ Component }">
    <main>
        <component :is="Component"></component>
    </main>
    </router-view>

</template>


<script setup lang="ts">
import Graphql from "@/views/Graphql.vue";
import Axios from "@/views/Axios.vue"
import Navigation from "@/components/Navigation.vue";


</script>

<style scoped>

</style>
