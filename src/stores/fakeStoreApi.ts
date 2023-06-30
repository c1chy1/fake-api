// Utilities
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axios from "axios";
export const useFakeStoreApi = defineStore("fakeStore", () => {
    const fakeProducts = reactive({products: null});
    const BASE_URL = "https://fakestoreapi.com/products/";
    const OTHER_BASE_URL = 'https://api.escuelajs.co/api/v1/products'
    const otherFakeProducts = reactive({products: null});
    const allCategories = reactive({categories: ""})
    const fakeProductsBycategory = reactive({products: null})
    const selectedcategory = ref("");

    const getAllProducts = async (RUTA) => {
        try {
            const path = BASE_URL + RUTA;
            // console.log(path);
            const resp = await axios.get(path);
            // console.log("from axios", resp);
            fakeProducts.products = resp.data;
            const resp2 = await axios.get(OTHER_BASE_URL)
            // console.log("from axios", resp2);

            otherFakeProducts.products = resp2.data


            console.log(fakeProducts)
        } catch (error) {
            console.log(error);
        }
    };
    const getAllCategories = async () => {
        try {
            const resp = await axios.get(`${BASE_URL}products/categories`);
            allCategories.categories = resp.data;
            console.log("allCategories", allCategories)
        } catch (error) {
            console.log(error)
        }
    };

    const getCategory = async (category : any) => {
        selectedcategory.value = category;
        try {
            const resp = await axios.get(`${BASE_URL}products/category/${category}`);
            fakeProductsBycategory.products = resp.data;
        } catch (error) {
            console.log(error)
        }
    }


    return {
        fakeProducts,
        getAllProducts,
        otherFakeProducts,
        getAllCategories,
        allCategories,
        getCategory,
        fakeProductsBycategory,
        selectedcategory,

    };
});