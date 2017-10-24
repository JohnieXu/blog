<template>
  <div id="app">
    <v-header :input="''"></v-header>
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
  },
  mounted() {

  }
}
</script>

<style lang="scss" type="stylesheets/scss">
@import './common/common.scss';
@import './common/markdown.scss';
#app {
  color: #2c3e50;
}
</style>
