<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  /* eslint-disable */
  import Header from "./components/Header.vue";
  import { mapActions } from "vuex";
  export default {
    components: {
      Header,
    },
    created() {
      this.callAcoes();
      // sem usar o helper do vuex :
      // this.$store.dispatch("acoes/initAcoes");
    },
    methods: {
      ...mapActions({ callAcoes: "acoes/initAcoes" }),
    },
  };
</script>

<style></style>
