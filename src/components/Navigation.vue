
<template>


<nav >

  <router-link  :to="{ path: '/axios' }"
               class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">
    Axios
  </router-link>

  <router-link :to="{ path: '/graphql' }"
               class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">
    Graphql
  </router-link>
</nav>
</template>

<script setup lang="ts">


</script>

<style scoped>


nav {
  display: flex;
   justify-content: space-evenly;
  padding: 1rem;

}
</style>