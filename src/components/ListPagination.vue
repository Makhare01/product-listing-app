<template>
  <div class="w-full border bg-slate-50 flex p-3 items-center justify-between">
    <div class="flex items-center gap-3">
      <p>Items per page:</p>
      <select
        name="limit"
        v-model="limit"
        class="p-2 border rounded-lg px-4 bg-transparent focus:outline-none"
        @change="emit('limitChange', $event)"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>

    <div class="flex items-start gap-3 p-2 rounded">
      <button
        @click="emit('pageChange', currentPage - 1)"
        :disabled="props.currentPage === 1"
        class="p-1"
      >
        Prev
      </button>

      <button
        v-for="page in Array.from(
          { length: props.totalPages },
          (_, i) => i + 1
        )"
        :class="
          clsx(
            'rounded-full p-1 border w-8 h-8 font-semibold hover:bg-gray-200',
            {
              'bg-green-300': page === props.currentPage,
            }
          )
        "
        :key="page"
        @click="emit('pageChange', page)"
      >
        {{ page }}
      </button>

      <button
        @click="emit('pageChange', currentPage + 1)"
        :disabled="props.currentPage === props.totalPages"
        class="p-1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import clsx from "clsx";
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["limitChange", "pageChange"]);

import { useRoute } from "vue-router";

const vueRoute = useRoute();

const limit = vueRoute.query.limit ?? 5;

const props = defineProps<{
  totalPages: number;
  currentPage: number;
}>();
</script>
