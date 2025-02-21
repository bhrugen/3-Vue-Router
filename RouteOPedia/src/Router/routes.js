import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact-us", component: Contact, name: "contact" },
    { path: "/contact", redirect: { name: "contact" } },
    { path: "/productList", component: ProductList },
    {
      path: "/product/:productId/:categoryId?",
      component: ProductDetail,
      name: "productDetails",
      props: true,
    },
    { path: "/product", component: ProductDetail },
    { path: "/:catchAll(.*)", component: NotFound },
  ],
});

export default router;
