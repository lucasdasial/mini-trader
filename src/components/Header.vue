<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Mini</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!-- <v-layout align-center mr-2>
        <span class="text-uppercase grey--text text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout> -->
      <v-menu offset-y transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="deep-orange" color="primary" dark v-on="on">
            menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list>
              <v-list-tile>
                <span class="text-uppercase grey--text text--darken-2">
                  Saldo: {{ funds | currency }}
                </span>
              </v-list-tile>
              <v-list-tile to="/">
                <v-list-tile-title>Início</v-list-tile-title>
              </v-list-tile>
              <v-list-tile to="/portfolio">
                <v-list-tile-title>Portfólio</v-list-tile-title>
              </v-list-tile>
              <v-list-tile to="/stocks">
                <v-list-tile-title>Ações</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="endDay">
                <v-list-tile-title>Finalizar o Dia</v-list-tile-title>
              </v-list-tile>
              <!-- <v-list-tile @click="saveData">
                <v-list-tile-title>Salvar Dados</v-list-tile-title>
              </v-list-tile> -->
              <!-- <v-list-tile @click="loadDataLocal">
                <v-list-tile-title>Carregar Dados</v-list-tile-title>
              </v-list-tile> -->
            </v-list>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
    },
    methods: {
      ...mapActions(["randomizeStocks", "loadData"]),
      endDay() {
        this.randomizeStocks();
      },
      // saveData() {
      //   const { funds, stockPortfolio, stocks } = this.$store.getters;
      //   this.$http.put("data.json", { funds, stockPortfolio, stocks });
      // },
      loadDataLocal() {
        this.loadData();
      },
    },
  };
</script>

<style></style>
