<template>
  <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          
          <router-link tag="li" to="/portfolio" active-class="active"
            ><a>Portfolio</a></router-link
          >
          <router-link tag="li" to="/stocks" active-class="active"
            ><a>Stocks</a></router-link
          >
        </ul>
        <strong class="navbar-text navbar-right">Funds : {{ funds }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load<span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },

  methods: {
      ...mapActions([
          "randomizeStocks"
      ]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style></style>
