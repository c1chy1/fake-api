<template>

    <section

             :class="[!store.cartOpen ? 'translate-y-[120vh]' : 'translate-y-0']"
             class="transition-all duration-300 mx-auto w-1/3 right-2 top-2 fixed bg-gray-200 px-4 text-center ">


      <CartHeader :store="store"/>
      <ul class="product list-reset grid text-center">
        <li class="border-solid border-b py-4 items-center grid grid-cols-4 "
            v-for="(product) in store.cart"
            :key="product.id">
          <ProductImage v-for="image in product.images" :src="image" :alt="product.title"/>
          <ProductName text-size="medium" :title="product.title" text-direction="center"/>
          <ProductDescription text-size="low" text-direction="center" :description="product.description"/>
          <ProductRemoveFromCart class="mt-6" :product="product" :store="store"/>
          <ProductPrice :price="product.price"/>
          <ProductQuantity :quantity="product.quantity"/>
        </li>

      </ul>
      <SummaryPrice :store="store"/>

    </section>

</template>
<script setup lang="ts">
import ProductPrice from "@/components/Shop/ProductPrice.vue";
import ProductName from "@/components/Shop/ProductName.vue";
import ProductImage from "@/components/Shop/ProductImage.vue";
import ProductRemoveFromCart from "@/components/Shop/ProductRemoveFromCart.vue";
import SummaryPrice from "@/components/Shop/SummaryPrice.vue";
import ProductQuantity from "@/components/Shop/ProductQuantity.vue";
import LoadingSpinner from "@/components/Shop/LoadingSpinner.vue";
import ProductDescription from "@/components/Shop/ProductDescription.vue";
import CartHeader from "@/components/Shop/CartHeader.vue";


const props = defineProps<{

  store: any
}>();

const store = props.store;

</script>
