<template>
  <div id="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./assets/component/header";
export default {
  components: {
    appHeader: Header
  },
  data() {
    return {
    
    };
  },
  created() {
    this.$store.dispatch('initStocks');
    console.log(this.$store.getters.stocks)
  }
};
</script>

<style>
body {
  padding: 2em;
}
</style>


