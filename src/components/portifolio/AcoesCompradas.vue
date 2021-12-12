<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="red darken-2 white--text">
      <v-card-title class="headline">
        <strong>
          {{ acao.name }}
          <small>
            (Preço: ${{ acao.price }} | Qtde: {{ acao.quantidade }})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          label="Quantidade"
          type="number"
          color="red"
          v-model.number="quantidade"
        />
        <v-btn
          class="teal darken-2 white--text"
          @click="sellAcao"
          :disabled="quantidade <= 0 || !Number.isInteger(quantidade)"
        >
          Vender Ação
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  /* eslint-disable */
  import { mapActions } from "vuex";
  export default {
    props: ["acao"],
    data() {
      return {
        quantidade: 0,
      };
    },
    methods: {
      ...mapActions({ sellAcaoAction: "portifolio/sellAcoes" }),
      sellAcao() {
        const order = {
          acaoId: this.acao.id,
          acaoPrice: this.acao.price,
          quantidade: this.quantidade,
        };
        this.sellAcaoAction(order);
        // this.$store.dispatch("sellAcao", order);
        this.quantidade = 0;
      },
    },
  };
</script>

<style></style>
