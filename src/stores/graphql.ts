import {defineStore} from 'pinia'
import {useQuery, useResult} from "@vue/apollo-composable";
import {reactive, watch} from "vue";
import {categories} from "@/apollo/queries/categories";
import {products} from "@/apollo/queries/products";
import {product} from "@/apollo/queries/product";
import type {Category, Product, Products} from "@/types/types";

import {computed , ref} from "vue";

const itemsInCart = reactive({ items: [] });
interface Cart {

    cid: string,
/*    products: Product[]*/


}

interface State {

    cart : Cart | []
}



export const useProductGraphQL =

    defineStore("product", {
        state: () => ({
            products:[],
            categories: {
                id: 0,
                name: '',
                image: ''

            },
            product: {
 id:0,
                title:'',
                price: 0
            },
            loading: false,
            productID : 0,
            cart: [],
            price: 0,
            quantity: 1,
            error: null,
            flag: false
        }),
        getters: {
            getCart(state) {
                return state.cart
            },

           async getProducts(state) {
                return state.products
            },
            getCartItems(state) {
                return state.cart.length
            },
            getCategories(state) {
                return state.categories
            },

        },
        actions: {

            async fetchCategories() {


                const {result} = useQuery(categories, null, {fetchPolicy: 'no-cache', prefetch: true})


                this.$state.categories = computed(() => result.value?.categories.map(category => ({

                    id: category.id,
                    name: category.name,
                    image: category.image

                })) ?? [])

            },


             fetchByCategories(categoryID: number) {


                const {result, loading, error} =  useQuery(products, {


                    categoryId: categoryID


                } )

                 this.$state.products = computed(() => result.value?.products ?? [])

                this.loading = loading
                this.error = error

            },

    addToCart( productID: any ) {



             try {


                 const {result  , loading} =   useQuery(product, {
                         id: productID

                     },

                 )

                 const products = useResult(product, [], data => data.product)

                 console.log(products)

/*
                 if (result) {
                     const product = result.value.product.data;


                     console.log(product)
                 }
*/




                 console.log(this.$state.product)

                 let item =  this.cart.find((i) => i.id === productID);

                 if (item) {
                     item.quantity++;
                 } else {


                     watch(result,value => {


                         this.$state.product = value

                         this.product.price


                         console.log(this.product.id + " id")
                         console.log(this.product.price + " price")
                         console.log(this.product.images)
                         console.log(this.product.title + " title")
                         console.log(this.quantity + " qt")
                         console.log(this.$state.product + "product")
                         console.log(value)
                         console.log(result)


                         this.cart.push({product: {

                                 id:productID,
                                 price:this.product.price

                             }, quantity : 1});
                     })




                 }

                 console.log(this.cart)

     /*            this.product.id = result.value?.product.id
                 this.product.price = result.value?.product.price
                 this.product.title = result.value?.product.title
                 this.product.images = result.value?.product.images


                 watch(result,value => {



                     this.product.id = value?.product.id
                     this.product.price = value?.product.price
                     this.product.title = value?.product.title
                     this.product.images = value?.product.images

                     this.cart.push({
                    id : value.product.id,
                   price : value.product.price,
                    title : value.product.title,
                        images : value.product.images,
                        quantity : this.quantity

                     });

            console.log(this.product.id + " id")
            console.log(this.product.price + " price")
            console.log(this.product.images)
            console.log(this.product.title + " title")
                     console.log(this.quantity + " qt")
                     console.log(this.product + "product")
                     console.log(value)
                     console.log(result)

        })
*/

       /*          this.cart.push({
                     id : this.product.id,
                     price : result.value?.product.price,
                     title : result.value?.product.title,
                     images : result.value?.product.images,
                     quantity : 1

                 });*/

             /*    let item = this.cart.find((i) => i.id === productID);

                 if (item) {
                     item.quantity++;
                 } else {
                     this.cart.push(this.product);
                 }
*/


             } catch (error) {
                 alert(error)
                 console.log(error)
             }



            }


        }
    })






