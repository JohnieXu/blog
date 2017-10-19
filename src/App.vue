<template>
  <div id="app">
    <v-header></v-header>
    <img src="./assets/logo2.jpg">
    <router-view/>
    <v-scrollTop></v-scrollTop>
  </div>
</template>

<script>
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-scrollTop': ScrollTop
  }
}
</script>

<style>
@import './common/common.scss';
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
