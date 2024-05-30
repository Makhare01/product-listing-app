import ProductsPage from "@/pages/products/ProductsPage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "products",
    component: ProductsPage,
  },
  {
    path: "/product/:productId",
    name: "product-details",
    component: () => import("../pages/products/ProductDetails.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/cart/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
