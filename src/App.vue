
<template>
<main>


  <Axios/>
<!--    <Layout/>-->
  </main>
</template>


<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'


import { computed, onMounted, ref } from "vue";

import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import Layout from "@/components/Axios.vue";
import Graphql from "@/components/Graphql.vue";
import Axios from "@/components/Axios.vue";
// GraphQL query
/*const ALLSTARSHIPS_QUERY = gql`
  query products {

  id
  title
  }
`;

// create ref for observer
const observer = ref(null);

// create ref for target element for observer to observe
const target = ref(null);

// destructure
const {
  // result of the query
  result,

  // loading state of the query
  loading,

  // query errors, if any
  error,

  // method to fetch more
  fetchMore,

  // access to query variables
  variables,
} = useQuery(ALLSTARSHIPS_QUERY, { first: 5 });


console.log(result)*/




</script>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
