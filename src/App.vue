<template>
  <AppNavbar />
  <div class="px-8">
    <router-view />
  </div>
  <VueQueryDevtools />
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
import AppNavbar from "@/components/AppNavbar.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
