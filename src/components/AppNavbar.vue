<template>
  <nav
    class="w-full p-3 border-b flex items-center justify-between px-8 sticky top-0 bg-white"
  >
    <router-link to="/">
      <p class="text-md font-semibold">Product Listing App</p>
    </router-link>
    <div class="relative">
      <div
        v-show="cartStore.items.length > 0"
        class="w-4 h-4 absolute -top-2 -right-2 rounded-full bg-red-500 flex items-center justify-center"
      >
        <p class="text-xs font-bold">
          {{ cartStore.items.length }}
        </p>
      </div>

      <router-link to="/cart">
        <img
          src="../assets/cart.png"
          alt="Cart icon"
          class="w-6 h-6 cursor-pointer"
        />
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useCartStore } from "@/stores";

const cartStore = useCartStore();
</script>

<style></style>
