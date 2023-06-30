import { ref, computed , reactive , toRefs} from 'vue'
import { defineStore } from 'pinia'
import {useQuery} from "@vue/apollo-composable";
import {categories} from "@/apollo/queries/categories";






export const useCategories = defineStore(
    'category',
    () => {


        const state = reactive({
            categories: null
        })
   function getCategories() {

        const {result, error} = useQuery(categories);


/*
        const allCategories = computed(() => result.value?.categories ?? [])
*/

       state.categories = result.value?.categories

       console.log(error.value)
       console.log(state.categories)


    }

    return {  getCategories , ...toRefs(state) }
})
