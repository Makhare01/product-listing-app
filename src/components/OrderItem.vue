<template>
  <div class="w-full p-2 border flex flex-col items-start shadow-sm">
    <p class="text-lg font-bold">Order #{{ props.orderNumber }}</p>

    <div class="w-full mt-2">
      <p class="text-md font-semibold text-start">Products:</p>

      <div class="flex flex-col gap-3">
        <CartItem
          v-for="item in props.order.products"
          :key="item.product._id"
          :item="item.product"
          :count="item.count"
        />
      </div>
    </div>

    <p class="text-md font-semibold mt-2">
      Total price: {{ props.order.totalPrice }}
    </p>

    <p class="text-md font-semibold mt-2">
      Order creation date: {{ format(props.order.createdAt, "dd MMM y") }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { Order } from "@/types";
import CartItem from "./cart/CartItem.vue";
import { format } from "date-fns";

const props = defineProps<{ orderNumber: number; order: Order }>();
</script>
