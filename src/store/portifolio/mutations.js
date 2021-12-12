/* eslint-disable */
export function buyAcao(state, { acaoId, acaoPrice, quantidade }) {
  console.log("entrei na mutation");
  const record = state.acoes.find((el) => el.id == acaoId);
  console.log(record);

  if (record) {
    record.quantidade += quantidade;
  } else {
    state.acoes.push({
      id: acaoId,
      quantidade: quantidade,
    });
  }
  state.funds -= acaoPrice * quantidade;
}
export function sellAcoes(state, { acaoId, acaoPrice, quantidade }) {
  const record = state.acoes.find((el) => el.id == acaoId);

  if (record.quantidade > quantidade) {
    record.quantidade -= quantidade;
  } else {
    state.acoes.splice(state.acoes.indexOf(record), 1);
  }
  state.funds += acaoPrice * quantidade;
}
