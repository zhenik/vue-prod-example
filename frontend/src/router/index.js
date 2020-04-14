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
    {
      path: "/auth-play",
      name: "authPlay",
      component: () => import("@/views/AuthPlay"),
    },
    {
      path: '/404',
      name: '404',
      component: () => import("@/views/NotFound"),
      props: true
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
});

export default router
