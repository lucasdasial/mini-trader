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
          v-model.number="quantidade"
        />
        <v-btn
          class="teal darken-2 white--text"
          @click="buyAcao"
          :disabled="quantidade <= 0 || !Number.isInteger(quantidade)"
        >
          Comprar
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  /* eslint-disable */
  export default {
    props: ["acao"],
    data() {
      return {
        quantidade: 0,
      };
    },
    methods: {
      buyAcao() {
        const order = {
          acaoId: this.acao.id,
          acaoPrice: this.acao.price,
          quantidade: this.quantidade,
        };
        this.quantidade = 0;
      },
    },
  };
</script>

<style></style>
