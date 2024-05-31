<template>
  <div class="my-5 border p-3">
    <p class="text-xl font-semibold text-start">Products Cart</p>

    <hr class="my-3" />

    <p v-if="cartStore.items.length === 0" class="text-lg font-semibold">
      No items in cart, please add
    </p>
    <div v-else class="flex flex-col gap-3">
      <CartItem
        v-for="item in cartStore.items"
        :key="item.item._id"
        :item="item.item"
        :count="item.count"
        @removeItem="cartStore.removeItem(item.item._id)"
        @decreaseItemCount="
          cartStore.changeItemCount(item.item._id, 'decrease')
        "
        @increaseItemCount="
          cartStore.changeItemCount(item.item._id, 'increase')
        "
      />
    </div>

    <hr v-show="cartStore.items.length > 0" class="my-3" />

    <div v-show="cartStore.items.length > 0" class="flex flex-col items-end">
      <p class="text-xl font-bold text-end">
        Total price: ${{ cartStore.getTotalPrice }}
      </p>

      <button
        class="w-[200px] mt-5 rounded p-2 bg-green-400 hover:bg-green-500"
        @click="router.push('checkout')"
      >
        Checkout order
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CartItem from "@/components/cart/CartItem.vue";
import { useCartStore } from "@/stores";
import router from "@/router";

const cartStore = useCartStore();
</script>

<style></style>
