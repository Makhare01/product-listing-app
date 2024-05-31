<template>
  <div class="w-full p-3 flex gap-3 items-stretch bg-slate-100">
    <img :src="props.item.imageUrl" alt="Product image" class="w-[150px]" />

    <div class="w-full flex-1 flex items-center justify-between">
      <div class="flex flex-col justify-between h-full items-start">
        <div class="flex flex-col items-start">
          <p class="text-lg font-semibold">{{ props.item.name }}</p>
          <p class="text-xs text-gray-400 font-semibold">
            {{ props.item.description }}
          </p>

          <p class="text-xs text-gray-400 font-semibold">
            In stock: {{ props.item.stock }}
          </p>
        </div>

        <p class="text-xl font-bold text-start">${{ props.item.price }}</p>
      </div>

      <div class="h-full flex flex-col justify-between items-end">
        <template
          v-if="
            thisInstance?.vnode?.props?.onDecreaseItemCount ||
            thisInstance?.vnode?.props?.onIncreaseItemCount ||
            thisInstance?.vnode?.props?.onRemoveItem
          "
        >
          <img
            src="../../assets/trash.png"
            alt="Trash icon"
            class="w-6 h-6 cursor-pointer"
            @click="emit('removeItem')"
          />

          <CartItemButtons
            :count="count"
            :stockCount="item.stock"
            @decrease="emit('decreaseItemCount')"
            @increase="emit('increaseItemCount')"
          />
        </template>
        <p v-else class="text-md font-bold">{{ count }}X</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, getCurrentInstance } from "vue";
import { Product } from "@/types";
import CartItemButtons from "./CartItemButtons.vue";

const props = defineProps<{ count: number; item: Product }>();

const emit = defineEmits([
  "removeItem",
  "decreaseItemCount",
  "increaseItemCount",
]);

const thisInstance = getCurrentInstance();
</script>
