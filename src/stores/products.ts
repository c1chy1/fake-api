import { ref, computed , reactive , toRefs} from 'vue'
import { defineStore } from 'pinia'
import {useQuery} from "@vue/apollo-composable";
import axios from 'axios'
import {products} from "@/apollo/queries/products";

// @ts-ignore
import {Product} from "@/models/product.model";
import {Category} from "@/models/Category.model";

const test = ref(3)


export const useProduct =

    defineStore("product", {
    state: () => ({
        products: [],
        categories: []
    }),
    getters: {

        getProducts(state){
            return state.products
        },
        getCategories(state){
            return state.categories
        }
    },
    actions: {

        async fetchCategories() {
            try {
                const data = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories/')
                this.categories = data.data

            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        async fetchByCategories(categoryID: number) {
            try {
                const data = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`)

                this.products = data.data.map(product => ({

                    id : product.id,
                    price : product.price,
                    title  : product.title,
                    description : product.description,
                    category: {
                        id: product.category.id,
                        name: product.category.name
                    },
                    images: [...product.images]


                }))

                console.log(this.products)

            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },

/*        async fetchProducts() {
            try {
                const data = await axios.get('https://api.escuelajs.co/api/v1/products/')


                this.products = data.data



          /!*      this.categoryID = data.data.map(product => ({

                        id: product.category.id

                }))


                console.log(this.categoryID)*!/
             /!*   const formattedProducts = computed(() =>
                    this.products
                        .map(({ price , category }) => ({
                          price,
                            category : category.id,
                            name : category.name
                        }))
                        .slice(0, 6)
                        .reverse(),
                )*!/



            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }*/
    },
})



/*export const useProducts =

    defineStore(
    'products',
    () => {


        const state = reactive({
            products: [],

            title: "",
            price: "",
            description: "",
            category: "",
            images: "",
        })



        function setProduct(result : any) {


            console.log(result)
        }

        function getProducts() {
            const variables = ref({

                title: 'bottoms',
                price: 100,
                description: 'desc',
                categoryId: 1,
                products: []
            });

            axios.get('https://api.escuelajs.co/api/v1/products/')
                .then(response => {

                    response.data = state.products

                    console.log(response.data)}


            )


            /!*
                    const allCategories = computed(() => result.value?.categories ?? [])
            *!/

       /!*     state.products = result.value


            console.log(state.products)
            console.log(result.value)*!/
         /!*   function selectUser (id) {
                variables.value = {
                    id,
                }
            }*!/

        }

        return {  setProduct, getProducts , ...toRefs(state) }
    })*/
