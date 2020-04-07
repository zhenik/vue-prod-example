import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/User"),
    },
    {
      path: "/other",
      name: "other",
      component: () => import("@/views/Other"),
    },
  ]
});

export default router
