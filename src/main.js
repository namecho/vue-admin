import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./assets/styles/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/index.scss";
import moment from "moment";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small" });
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
