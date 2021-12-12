/* eslint-disable */
export function getAcoesPortifolio(state, getters) {
  return state.acoes.map((acao) => {
    // const record = getters.acoes.find((el) => el.id == acao.id);
    const record = getters.acoes;
    return {
      id: acao.id,
      quantidade: acao.quantidade,
      name: acao.name,
      price: acao.price,
    };
  });
}
export function getFunds(state) {
  return state.funds;
}
