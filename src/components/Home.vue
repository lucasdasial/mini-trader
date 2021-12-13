<template>
  <div class="wrapper">
    <h1 class="display-1 font-weight-light mb-4">
      Negocie e Consulte suas Ações
    </h1>

    <!-- <v-sheet :elevation="6" class="pa-2 primary">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">
        Você pode Salvar & Carregar os Dados
      </span>
    </v-sheet> -->
    <v-sheet :elevation="6" class="pa-2 primary darken-1 mt-3">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">
        Clique em 'Finalizar Dia' para iniciar um novo dia, com valores novos
        das ações!
      </span>
    </v-sheet>
    <VueLottiePlayer
      class="mg-center"
      loop
      path="https://assets5.lottiefiles.com/packages/lf20_qxemgrnw.json"
    />
    <v-divider class="my-4" />
    <h1><strong>Seu Saldo:</strong> {{ funds | currency }}</h1>
  </div>
</template>

<script>
  import VueLottiePlayer from "vue-lottie-player";
  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    components: {
      VueLottiePlayer,
    },
  };
</script>

<style>
  .mg-center {
    margin: auto;
  }
</style>
