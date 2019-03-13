import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Jack from "./components/myheader/Jack";
import Lyndon from "./components/myheader/Lyndon";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Jack },
  { path: "/lyndon", component: Lyndon },
];

const router = new VueRouter({
  routes,
  mode: "history"
});


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
