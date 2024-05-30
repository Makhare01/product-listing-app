import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

createApp(App).use(router).use(VueQueryPlugin).use(createPinia()).mount("#app");
