import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import(/* webpackChunkName: "about" */ "../views/layout")
  }
];

const router = new VueRouter({
  routes
});

export default router;
