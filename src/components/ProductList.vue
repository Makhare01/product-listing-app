<template>
  <div class="my-5">
    <h1 v-if="isLoading">Loading products...</h1>
    <h1 v-else-if="isError">{{ error?.message }}</h1>
    <div v-else-if="data">
      <div class="mb-5 flex flex-wrap gap-5 justify-between">
        <ProductCard
          v-for="product in data?.products"
          :key="product._id"
          :product="product"
        />
      </div>

      <ListPagination
        @limitChange="onLimitChange"
        @pageChange="onPageChange"
        :totalPages="data?.totalPages ?? 1"
        :currentPage="data?.currentPage ?? 1"
      />
    </div>
    <p v-else>Failed to get products</p>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from "./card/ProductCard.vue";
import ListPagination from "./ListPagination.vue";

import { watch, ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsList } from "@/api";
import router from "@/router";
import { useRoute } from "vue-router";

const vueRoute = useRoute();

const page = ref(Number(vueRoute.query.page ?? 1));
const limit = ref(Number(vueRoute.query.limit ?? 5));

const { data, refetch, isLoading, isError, error } = useQuery({
  queryKey: ["products", { page: page.value, limit: limit.value }],
  queryFn: () => getProductsList({ page: page.value, limit: limit.value }),
  select: (response) => response.data,
});

watch([limit, page], () => {
  refetch();
});

const onLimitChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value;
  limit.value = Number(value);

  router.push({
    path: vueRoute.fullPath,
    query: { ...vueRoute.query, limit: limit.value },
  });
};

const onPageChange = (value: number) => {
  page.value = value;

  router.push({
    path: vueRoute.fullPath,
    query: { ...vueRoute.query, page: page.value },
  });
};
</script>
