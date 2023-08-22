import {defineStore} from 'pinia'
import {useQuery, useResult} from "@vue/apollo-composable";
import {reactive, watch} from "vue";
import {categories} from "@/apollo/queries/categories";
import {products} from "@/apollo/queries/products";
import {product} from "@/apollo/queries/product";
import { useApolloClient } from "@vue/apollo-composable";
import type {Cart , Categories} from "@/types/types";
import type {Category} from "@/models/category.model";

import {computed , ref} from "vue";
import type {ComputedRef} from "vue";
import {logMissingFieldErrors} from "@apollo/client/core/ObservableQuery";


let reactiveTest = reactive([{

    id: 0,
    name: ''

}])


export const useProductGraphQL =

    defineStore("product",
        {
            state: () => ({
                products: [],
                categories: reactive([{
                    id: 0,
                    name: '',
                    image:''
                }]) ,
                cart: [] as Array<Cart>,
                product: null,
                categoryID: 0,
                loading: false,
                productID: 0,
                price: 0,
                quantity: 1,
                error: {},
                data: ref([]),
                flag: false,
                test: []
            }),
            getters: {
                getCart(state) {
                    return state.cart
                },

                getProduct(state) {
                    return state.product
                },

                productQuantity(state) {

                    return state.cart.reduce(
                        (total, product) => total + product.quantity,
                        0
                    );
                },
                async getProducts(state) {
                    return state.products
                },
                getCategories(state) {
                    return state.categories
                },
                cartTotalPrice(state) {
                    return state.cart.reduce((total, product) => {
                        return total + product.price * product.quantity;
                    }, 0);
                }
            },
            actions: {

                async fetchCategories()  {
                    this.loading = true;

                    const { resolveClient } = useApolloClient();
                    const apolloClient = resolveClient();

                    try {
                        const { data: queryData } = await apolloClient.query({

                      query: categories

                        });
                        this.categories = queryData.categories.map((i: any) => ({

                            id: i.id,
                            name: i.name,
                            image: i.image,

                        }))

                        this.loading = false;

                        console.log(this.categories)



                    } catch (error) {
                        console.error('Błąd podczas pobierania danych:', error);
                        this.loading = false;
                    }
                },

              async  fetchByCategories(categoryID : number[] | null) {


                  this.loading = true;

                  const { resolveClient } = useApolloClient();
                  const apolloClient = resolveClient();
                  try {
                      const  result  = await apolloClient.query({

                          query: products,
                          variables: {
                              categoryId: categoryID
                          }

                      });

                      this.products = result.data.products.map((product: any) => ({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          images: product.images,
                          category: {

                              id: product.category.id

                          }
                      }));

                      this.loading = false;

                  } catch (error) {
                      console.error('Błąd podczas pobierania danych:', error);
                      this.loading = false;
                  }


                },

                addToCart(productID: any) {

                    const {result, loading} = useQuery(product, {
                            id: productID

                        },
                    )
                    this.product = result.value?.product

                    let item = this.cart.find((i) => i.id === productID);

                    if (item) {
                        item.quantity++;

                    } else {

                        watch(result, value => {
                            this.product = result.value?.product


                            if (result.value) {

                                this.cart.push({
                                    id: productID,
                                    price: value.product.price,
                                    images:  value.product.images,
                                    title:  value.product.title,
                                    quantity: 1
                                });
                            }
                        })

               /*         if (result.value) {
                            this.cart.push({
                                id: productID,
                                price: this.product?.price,
                                images: this.product?.images,
                                title: this.product?.title,
                                quantity: 1
                            });
                        }*/
                    }
                },

                removeFromCart(productID: any) {


                    let item = this.cart.find((i) => i.id === productID);

                    if (item) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cart = this.cart.filter((i) => i.id !== productID);

                        }
                    }


                },
            }
        })