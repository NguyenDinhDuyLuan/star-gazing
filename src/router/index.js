import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/homepage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "router-link-active",
});

export default router;
