<template>
  <div class="flex items-center gap-2">
    <button :disabled="count === 1" @click="emit('decrease')">
      <img
        src="../../assets/minus.png"
        alt="Minus icon"
        class="w-6 h-6 cursor-pointer"
      />
    </button>

    <p>{{ props.count }}</p>
    <button :disabled="count === stockCount" @click="emit('increase')">
      <img
        src="../../assets/plus.png"
        alt="Plus icon"
        class="w-6 h-6 cursor-pointer"
      />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps<{
  count: number;
  stockCount: number;
}>();

const emit = defineEmits(["increase", "decrease"]);
</script>
