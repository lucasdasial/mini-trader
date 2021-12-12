/* eslint-disable */
import acoes from "@/data/acoes";

export function buyAcao({ commit }, order) {
  //terceiro argumento permite acessar outro modulo
  commit("portifolio/buyAcao", order, { root: true });
}
export function initAcoes({ commit }) {
  commit("setAcoes", acoes);
}
