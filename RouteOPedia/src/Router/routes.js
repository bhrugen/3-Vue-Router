import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import ProductList from "@/components/Product/ProductList.vue";
import ProductDetail from "@/components/Product/ProductDetail.vue";
import NotFound from "@/components/Layout/NotFound.vue";
import Login from "@/components/Authentication/Login.vue";
import NoAccess from "@/components/Layout/NoAccess.vue";
import { createRouter, createWebHistory } from "vue-router";

function isAdmin() {
  const isAdmin = false;
  if (isAdmin) {
    return true;
  }

  return { name: "noaccess" };
}

function isAuthenticated() {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return true;
  }

  return false;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/contact-us", component: Contact, name: "contact" },
    { path: "/contact", redirect: { name: "contact" } },
    { path: "/noaccess", component: NoAccess, name: "noaccess" },
    {
      path: "/productList",
      component: ProductList,
      name: "productList",
      beforeEnter: [isAdmin, isAuthenticated],
    },
    { path: "/login", component: Login, name: "login" },
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

router.beforeEach((to, from) => {
  console.log("Global Before Each");
  //check if user is authenticated
  //if not redirect to login page
  const isAuthenticated = true;

  if (to.name == "home") {
    return true;
  }
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  }

  return true;
});

export default router;
