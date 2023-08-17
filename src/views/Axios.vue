
<template>
  <section>


    <ProductCategoryFilter :categories="categories"
                           :store="storeAxios"/>
    <div class="flex w-full">

    <Product :products="products"
    :store="storeAxios"
    />
    <ProductCart
        :store="storeAxios"
    />
    </div>
  </section>

</template>

<script setup lang="ts">

import {onMounted, ref , computed , watch} from "vue";
import {useProductAxios} from "@/stores/axios";
import ProductCategoryFilter from "@/components/Shop/ProductCategoryFilter.vue";
import Product from "@/components/Shop/Product.vue";
import ProductCart from "@/components/Shop/ProductCart.vue";
const storeAxios = useProductAxios();


const isCartOpen = ref(false);



const products = computed(() => {
  return storeAxios.products
});

const cart = computed(() => {
  return storeAxios.cart
});


const categories = computed(() => {
  return storeAxios.categories;
});


const showCart = () => {
  isCartOpen.value = true;
};

const hideCart = () => {
  isCartOpen.value = false;
};



onMounted(() => {
  storeAxios.fetchCategories();
});



const category = ref(0)


function addToCart(productID:any) {

  storeAxios.addToCart(productID)


  console.log(cart.value)

}



watch(category, async () => {

  await storeAxios.fetchByCategories(category.value)


  console.log(category.value)
  console.log(products)

})



</script>

<style scoped>


#cart {

  position: relative;
  right: 0;
  top: 0;
  z-index: 100;
  width: 50%;
  height: 6rem;

}
#grid {

  display: flex;
  flex-direction: column;

}

img {
  width: 6rem;

}

</style>