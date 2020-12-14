import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import(/* webpackChunkName: "layout" */ "../views/layout"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/home")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
