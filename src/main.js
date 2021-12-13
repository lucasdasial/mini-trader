import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

import "./plugins/axios";

import router from "./router";
import store from "./store/store";
import VueLottiePlayer from "vue-lottie-player";

Vue.config.productionTip = false;

Vue.filter("currency", (value) => {
  return "R$ " + value.toLocaleString();
});

Vue.use(VueLottiePlayer);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
