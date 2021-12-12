import Vue from "vue";
import Vuex from "vuex";

import portifolio from "./portifolio";
import acoes from "./acoes";

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      portifolio,
      acoes,
    },
  });

  return Store;
}
