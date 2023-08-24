import {defineStore} from 'pinia'
import {useQuery, useApolloClient ,  useQueryLoading  } from "@vue/apollo-composable";
import {reactive, watch , ref} from "vue";
import {categories} from "@/apollo/queries/categories";
import {products} from "@/apollo/queries/products";
import {product} from "@/apollo/queries/product";
import type {Cart, Categories, Product, Products} from "@/types/types";

export const useProductGraphQL =

    defineStore("product",
        {
            state: () => ({
                products: [] as Array<Product>,
                categories: reactive([{
                    id: 0,
                    name: '',
                    image:''
                }]) ,
                cart: [] as Array<Cart>,
                product: null,
                loading: false,
                cartOpen: false,
            }),
            getters: {
                productQuantity(state) {

                    return state.cart.reduce(
                        (total, product) => total + product.quantity,
                        0
                    );
                },

                cartTotalPrice(state) {
                    return state.cart.reduce((total, product) => {
                        return total + product.price * product.quantity;
                    }, 0);
                }
            },
            actions: {


                toggleCart(state?: boolean) {
                    if (typeof state === "boolean") {
                        this.cartOpen = state;
                    } else {
                        this.cartOpen = !this.cartOpen;
                    }
                },
                async fetchCategories()  {
                    this.loading = true;


                    const { resolveClient } = useApolloClient();
                    const apolloClient = resolveClient();

                    try {
                        const { data: queryData } = await apolloClient.query<Categories>({

                      query: categories

                        });
                        this.categories = queryData.categories.map((i: any) => ({

                            id: i.id,
                            name: i.name,
                            image: i.image,

                        }))

                        this.loading = false;



                    } catch (error) {
                        console.error(error);
                        this.loading = false;
                    }
                },

              async fetchByCategories(categoryID : number[] | null) {


                  this.loading = true;

                  const { resolveClient } = useApolloClient();
                  const apolloClient = resolveClient();
                  try {
                      const  { data: queryData }  = await apolloClient.query<Products>({

                          query: products,
                          variables: {
                              categoryId: categoryID
                          }

                      });

                      this.products = queryData.products.map((product: any) => ({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          description: product.description,
                          images: product.images,
                          category: {

                              id: product.category.id,
                              name:product.category.name

                          }
                      }));

                      this.loading = false;

                  } catch (error) {
                      console.error(error);
                      this.loading = false;
                  }


                },

                addToCart: function (productID: any) {

                    this.loading = true

                    const {result , } = useQuery(product, {
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
                                    images: value.product.images,
                                    title: value.product.title,
                                    description: value.product.description,
                                    quantity: 1
                                });
                            }
                        })

                        if (result.value) {
                            this.cart.push({
                                id: productID,
                                price: result.value?.product.price,
                                images: result.value?.product.images,
                                title: result.value?.product.title,
                                description: result.value?.product.description,
                                quantity: 1
                            });
                        }
                    }

                    setTimeout(() => {
                        this.loading = false;
                    }, 500);

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