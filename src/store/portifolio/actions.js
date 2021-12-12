export function sellAcoes({ commit }, order) {
  commit("sellAcoes", order, { root: true });
}
