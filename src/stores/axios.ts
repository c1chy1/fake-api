import {defineStore} from 'pinia'
import axios from "axios";
import type {Cart, Category, Product} from "@/types/types";


export const useProductAxios =

    defineStore("product", {
        state: () => ({
            products: [] as Array<Product>,
            categories: [] as Array<Category>,
            cart: [] as Array<Cart>,
            product: {
                id: 0,
                title: '',
                description:'',
                price: 0,
                images: []
            },
            loading: false,
            cartOpen: false,
        }),
        getters: {
            productQuantity(state)  {

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

            async fetchCategories() {

                this.loading = true
                try {

                    const data = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories/')
                    this.categories = data.data.map(product => ({

                        id: product.id,
                        name: product.name,
                        image: product.image,

                    }))

                } catch (error) {
                    alert(error)
                    console.log(error)

                }
                finally
                {
                    this.loading = false
                }
            },



            async fetchByCategories(categoryID: number) {

                this.loading = true;

                try {


                    const data = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryID}`)

                    this.products = data.data.map(product => ({

                        id: product.id,
                        price: product.price,
                        title: product.title,
                        description: product.description,
                        category: {
                            id: product.category.id,
                            name: product.category.name,
                            image: product.category.image
                        },
                        images: [...product.images]

                    }))


                } catch (error) {
                    alert(error)
                    console.log(error)
                } finally {

                    this.loading = false
                }
            },
            async addToCart(productID: any) {


                try {
                    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productID}`)



                    this.product = await response.json()
                    let item = this.cart.find((i) => i.id === productID);

                    if (item) {
                        item.quantity++;
                    } else {
                        this.cart.push({id:productID,
                            price: this.product.price,
                            images: this.product.images,
                            title: this.product.title,
                            description: this.product.description,
                            quantity: 1});
                    }
                } catch (error) {
                    alert(error)
                    console.log(error)
                }
            },


            removeFromCart(productID : any) {

                try {

                    let item = this.cart.find((i) => i.id === productID);

                    if (item) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cart = this.cart.filter((i) => i.id !== productID);
                        }
                    }

                } catch (error) {
                    alert(error)
                    console.log(error)
                }
            },

        },
    })

