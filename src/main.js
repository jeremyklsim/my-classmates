import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Jack from "./components/jack/Jack";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/jack", component: Jack },
];

const router = new VueRouter({
  routes,
  mode: "history"
});


new Vue({
  render: h => h(App),
  router
}).$mount("#app");
