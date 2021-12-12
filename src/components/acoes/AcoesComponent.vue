<template>
  <v-layout row wrap>
    <card-acao v-for="acao in acoes" :key="acao.id" :acao="acao" />
  </v-layout>
</template>

<script>
  /* eslint-disable */
  import CardAcao from "./CardAcao.vue";
  import { mapGetters, mapState } from "vuex";
  export default {
    components: {
      CardAcao,
    },

    computed: {
      ...mapState({ acoes: (state) => state.acoes.acoes }),
      ...mapGetters({ getAcoesDb: "acoes/getAcoes" }),
      getAcoes() {
        return this.getAcoesDb;
      },
    },
  };
</script>

<style></style>
