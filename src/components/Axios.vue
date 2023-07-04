
<template>
  <section>



    <select
        v-model="category"

    >
      <option
          value="">All</option>
      <option v-for="{ name, id  } of categories"
              :value="id">{{ name }}</option>
    </select>
    <!--    <div

            v-for="{ id, name, slug  } in  getProducts"
                 :key="id"
                 :id="id"
                 :data-index="id"

        >

    <h1>{{ name }}</h1>
          <h1>{{ id }}</h1>

        </div>-->

    <div class="hello">
      <h1>Made By Getters</h1>
      <div v-for="product in products" :key="product.id">

        <button @click="addToCart(product.id)" >BUY PRODUCT</button>

        {{ product.title}}
        {{product.id}}
        {{ product.price}}: EURO

        <h1> {{product.category.name}}</h1>
        <p> {{product.description}}</p>
        <h1> {{product.category.id}} : Category ID</h1>
        <img  v-for="image in product.images" :src="image" >


      </div>
      <!--      <h1>Made By Actions</h1>
            <div v-for="product in products" :key="id">
             {{product}}
            </div>-->
    </div>


    <div id="cart">

      <div id="product" v-for="(product , index) in cart" >

        <h1>{{product.title}}</h1>
        <h1>{{product.id}}</h1>
<button @click="cart.splice(index, 1)">Remove</button>

      </div>

Summary : {{store.getCartItems}}
    </div>


  </section>

</template>

<script setup lang="ts">

import {onMounted, ref , computed , watch} from "vue";
import {useProduct} from "@/stores/products";
const store = useProduct();


const isCartOpen = ref(false);



const products = computed(() => {
  return store.products
});


const productID = computed(() => {
  return store.product.id
});
const cart = computed(() => {
  return store.cart
});


const categories = computed(() => {
  return store.categories;
});


const showCart = () => {
  isCartOpen.value = true;
};

const hideCart = () => {
  isCartOpen.value = false;
};



onMounted(() => {
  store.fetchCategories();
});



const category = ref(0)


function addToCart(productID:any) {

  store.addToCart(productID)


  console.log(cart.value)

}



watch(category, async () => {

  await store.fetchByCategories(category.value)

})



</script>

<style scoped>


#cart {

  position: fixed;
  right: 0;
  top: 0;
z-index: 100;

}

#grid {

  display: flex;
  flex-direction: column;

}

img {
  width: 6rem;

}

</style>