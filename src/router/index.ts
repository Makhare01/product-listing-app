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
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/checkout/CheckoutPage.vue"),
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("../pages/orders/OrdersList.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () => import("../pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
