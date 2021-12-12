<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="teal darken-2 white--text">
      <v-card-title class="headline">
        <strong
          >{{ acao.name }}<small> (Preço: ${{ acao.price }})</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          color="teal"
          v-model.number="quantidadeData"
        />
        <v-btn
          class="teal darken-2 white--text"
          @click="buyAcao"
          :disabled="quantidadeData < 0 || !Number.isInteger(quantidadeData)"
        >
          Comprar
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapActions } from "vuex";
  /* eslint-disable */
  export default {
    props: ["acao"],
    data() {
      return {
        quantidadeData: 0,
      };
    },
    methods: {
      ...mapActions({ buyAcaoAction: "acoes/buyAcao" }),
      buyAcao() {
        const order = {
          acaoId: this.acao.id,
          acaoPrice: this.acao.price,
          quantidade: this.quantidadeData,
        };

        this.buyAcaoAction({ ...order });
        // this.$store.dispatch("portfolio/buyAcao", { ...order });
        this.quantidadeData = 0;
      },
    },
  };
</script>

<style></style>
