<template>
  <div class="my-5 border p-3">
    <p class="text-xl font-semibold text-start">Checkout order</p>

    <hr class="my-3" />

    <p v-if="isError">{{ error?.message }}</p>

    <template v-else>
      <div class="flex flex-col gap-3">
        <CartItem
          v-for="item in cartStore.items"
          :key="item.item._id"
          :item="item.item"
          :count="item.count"
        />
      </div>

      <hr class="my-3" />

      <div class="flex flex-col items-end">
        <p class="text-xl font-bold text-end">
          Total price: ${{ cartStore.getTotalPrice }}
        </p>

        <button
          :disabled="isPending"
          class="w-[200px] mt-5 rounded p-2 bg-green-400 hover:bg-green-500"
          @click="
            mutate(
              {
                products: orderProducts,
                totalPrice: Number(cartStore.getTotalPrice),
              },
              {
                onSuccess: () => {
                  cartStore.items = [];
                  router.push('/orders');
                },
              }
            )
          "
        >
          {{ isPending ? "Processing..." : "Checkout" }}
        </button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { createOrder } from "@/api";
import CartItem from "@/components/cart/CartItem.vue";
import router from "@/router";
import { useCartStore } from "@/stores";
import { useMutation } from "@tanstack/vue-query";

const cartStore = useCartStore();

const orderProducts = cartStore.items.map((item) => ({
  product: item.item,
  count: item.count,
}));

const { isError, error, mutate, isPending } = useMutation({
  mutationFn: createOrder,
});
</script>
