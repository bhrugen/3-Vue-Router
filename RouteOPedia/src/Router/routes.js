import HomePage from "@/components/Home/HomePage.vue";
import Contact from "@/components/Home/Contact.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/contact", component: Contact },
  ],
});

export default router;
