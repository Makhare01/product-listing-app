<template>
  <div class="w-[300px] rounded border p-3">
    <div class="flex items-center justify-start">
      <div
        :class="
          clsx('border rounded-lg bg-green-200 p-1', {
            'bg-red-200': props.product.stock === 0,
          })
        "
      >
        <p class="text-xs font-semibold">
          {{ props.product.stock ? "In Stock" : "Out Of Stock" }}
        </p>
      </div>
    </div>

    <router-link
      :to="{
        name: 'product-details',
        params: { productId: props.product._id },
      }"
    >
      <img
        :src="props.product.imageUrl"
        alt="Product image"
        class="w-full rounded-md mt-2 cursor-pointer"
      />
    </router-link>

    <p class="text-md text-gray-500 font-bold mt-2 text-start">
      {{ props.product.name }}
    </p>
    <p class="text-lg font-bold text-start">${{ props.product.price }}</p>

    <button
      :class="
        clsx('w-full mt-5 rounded p-2 bg-green-400', {
          'hover:bg-green-500 hover:text-white': props.product.stock > 0,
          'bg-green-300': props.product.stock === 0,
          'bg-red-400 hover:bg-red-500': cartStore.isInCart(props.product._id),
        })
      "
      :disabled="props.product.stock === 0"
      @click="onCartButtonClick"
    >
      {{
        cartStore.isInCart(props.product._id)
          ? "Remove from cart"
          : "Add to cart"
      }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Product } from "@/types";
import clsx from "clsx";
import { useCartStore } from "@/stores";

const props = defineProps<{ product: Product }>();

const cartStore = useCartStore();

const onCartButtonClick = () => {
  if (!cartStore.isInCart(props.product._id)) {
    cartStore.addItem(props.product);
    return;
  }

  cartStore.removeItem(props.product._id);
};
</script>
