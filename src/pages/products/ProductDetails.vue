<template>
  <div class="w-full border p-5 my-5">
    <h1 v-if="isLoading">Loading product...</h1>
    <h1 v-else-if="isError">{{ error?.message }}</h1>
    <div v-else-if="data" class="flex items-stretch">
      <div class="w-1/2">
        <!-- <img :src="data.imageUrl" alt="Product image" class="w-[500px]" /> -->
        <ProductGallery :images="[data.imageUrl, ...data.images]" />
      </div>
      <div class="w-1/2 flex flex-col items-start justify-between flex-1">
        <div class="w-full flex flex-col gap-2 items-start">
          <h1 class="font-bold text-xl">{{ data.name }}</h1>

          <p class="text-md text-gray-400 mt-3">{{ data.description }}</p>

          <p class="text-md text-gray-400 mt-3">
            Category: {{ data.category }}
          </p>

          <p class="text-md text-gray-400 mt-3">
            Product in stock: {{ data?.stock }}
          </p>
        </div>

        <div class="w-full flex flex-col items-start">
          <p class="text-3xl font-semibold mt-3">${{ data.price }}</p>

          <button
            :class="
              clsx('w-full mt-5 rounded p-2 bg-green-400', {
                'hover:bg-green-500 hover:text-white': data.stock > 0,
                'bg-green-300': data.stock === 0,
                'bg-red-400 hover:bg-red-500': cartStore.isInCart(data._id),
              })
            "
            :disabled="data.stock === 0"
            @click="onCartButtonClick"
          >
            {{
              cartStore.isInCart(data._id) ? "Remove from cart" : "Add to cart"
            }}
          </button>
        </div>
      </div>
    </div>
    <p v-else>Failed to get product details</p>
  </div>
</template>

<script lang="ts" setup>
import { getProductDetails } from "@/api";
import { useCartStore } from "@/stores";
import { useQuery } from "@tanstack/vue-query";
import clsx from "clsx";
import { useRoute } from "vue-router";
import ProductGallery from "@/components/ProductGallery.vue";

const router = useRoute();
const cartStore = useCartStore();

const productId = String(router.params.productId);

const { data, isLoading, isError, error } = useQuery({
  queryKey: ["productDetails", { productId }],
  queryFn: () => getProductDetails({ productId }),
  select: (response) => response.data,
});

const onCartButtonClick = () => {
  if (data.value) {
    if (!cartStore.isInCart(productId)) {
      cartStore.addItem(data.value);
      return;
    }

    cartStore.removeItem(productId);
  }
};
</script>
