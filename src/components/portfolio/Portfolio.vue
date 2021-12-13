<template>
  <v-layout row wrap class="bg">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"> </Stock>
    <VueLottiePlayer
      class="mg-center"
      style="width: 300px"
      v-if="showLottie"
      loop
      path="https://assets6.lottiefiles.com/private_files/lf30_spnasgeu.json"
    />
  </v-layout>
</template>

<script>
  import { mapGetters } from "vuex";
  import Stock from "./Stock";
  import VueLottiePlayer from "vue-lottie-player";

  export default {
    components: { Stock, VueLottiePlayer },
    computed: {
      ...mapGetters({
        stocks: "stockPortfolio",
      }),
    },
    data() {
      return {
        showLottie: false,
      };
    },
    created() {
      if (this.stocks.length == 0) {
        this.showLottie = true;
      }
    },
  };
</script>

<style scoped>
  .mg-center {
    margin: auto;
  }
</style>
