<template>
  <div class="w-full my-5 p-3">
    <h1 class="text-xl font-bold text-start">Orders</h1>

    <hr class="my-3" />

    <p v-if="isLoading" class="text-lg font-semibold">Loading orders...</p>
    <p v-else-if="isError" class="text-lg font-semibold">
      {{ error?.message }}
    </p>

    <div v-else-if="isSuccess" class="flex flex-col gap-3">
      <div v-for="(order, index) in data" :key="order._id">
        <OrderItem :order="order" :orderNumber="index + 1" />
      </div>
    </div>

    <p v-else class="text-lg font-semibold">Failed to get orders</p>
  </div>
</template>

<script lang="ts" setup>
import { getOrders } from "@/api";
import OrderItem from "@/components/OrderItem.vue";
import { useQuery } from "@tanstack/vue-query";

const { data, isSuccess, isLoading, isError, error } = useQuery({
  queryKey: ["orders"],
  queryFn: getOrders,
  select: (response) => response.data,
});
</script>
