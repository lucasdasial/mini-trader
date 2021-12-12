<template>
  <v-layout row wrap>
    <acao-compradas v-for="acao in acoesState" :key="acao.id" :acao="acao" />
  </v-layout>
</template>

<script>
  /* eslint-disable */
  import { mapGetters, mapState } from "vuex";
  import AcaoCompradas from "./AcoesCompradas.vue";
  export default {
    components: { AcaoCompradas },
    computed: {
      ...mapState({ acoesState: (state) => state.portifolio.acoes }),
      ...mapGetters({
        acoes: "portifolio/getAcoesPortifolio",
      }),
    },
    watch() {
      console.log(this.acoes);
      // console.log(this.acoesState);
    },
  };
</script>

<style></style>
