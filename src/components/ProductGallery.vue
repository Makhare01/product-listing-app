<template>
  <div>
    <img
      :src="props.images[activeIndex]"
      alt="Product image"
      class="h-[400px]"
    />

    <div class="flex items-start flex-wrap gap-2 mt-2">
      <img
        v-for="(image, index) in props.images"
        :src="image"
        alt="Product image"
        :key="image"
        :class="
          clsx('h-[70px] cursor-pointer border', {
            'border-green-500': activeIndex === index,
          })
        "
        @click="activeIndex = index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import clsx from "clsx";
import { defineProps, ref } from "vue";

const activeIndex = ref(0);
const props = defineProps<{ images: Array<string> }>();
</script>
