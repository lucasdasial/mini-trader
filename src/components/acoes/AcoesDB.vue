<template>
  <v-layout row wrap>
    <Acao v-for="acao in acoes" :key="acao.id" :acao="acao" />
  </v-layout>
</template>

<script>
  import Acao from "./Acao.vue";
  export default {
    components: {
      Acao,
    },
    data() {
      return {
        acoes: [
          { id: 1, name: "BMW", price: 110 },
          { id: 2, name: "Apple", price: 190 },
          { id: 3, name: "Google", price: 210 },
          { id: 4, name: "Magalu", price: 100 },
        ],
      };
    },
  };
</script>

<style></style>
