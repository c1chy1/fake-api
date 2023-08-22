import {defineStore} from 'pinia'
import axios from "axios";

import {type Product} from "@/models/product.model";
import {type Category} from "@/models/category.model";

import {type Cart} from "@/types/types";


export const useProductAxios =

    defineStore("product", {
        state: () => ({
            products: [] as Array<Product>,
            categories: [] as Array<Category>,
            cart: [] as Array<Cart>,
            product: {

                id: 0,
                title: '',
                price: 0,
                images: []

            },
            totalPrice: 0
        }),
        getters: {
            getCart(state) {
                return state.cart
            },
            productQuantity(state)  {

                return state.cart.reduce(
                    (total, product) => total + product.quantity,
                    0
                );
            },
            getProducts(state) {
                return state.products
            },
            getCategories(state) {
                return state.categories
            },
            getTotalCost(state) {
                return state.totalPrice
            },
          cartTotalPrice(state) {
                return state.cart.reduce((total, product) => {
                    return total + product.price * product.quantity;
                }, 0);
            }
        },
        actions: {

            async fetchCategories() {
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
            },



            async fetchByCategories(categoryID: number) {
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
                }
            },
            async addToCart(productID: any) {


                try {
                    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productID}`)

                    const data = await response.json();
                    this.product = data

                    let item = this.cart.find((i) => i.id === productID);

                    if (item) {
                        item.quantity++;
                    } else {
                        this.cart.push({id:productID,
                            price: this.product.price,
                            images: this.product.images,
                            title: this.product.title,
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

