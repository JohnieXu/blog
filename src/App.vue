<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-scrollTop></v-scrollTop>
  </div>
</template>

<script>
import Header from './components/Header'
import ScrollTop from './components/ScrollTop'
import hljs from 'highlight.js/lib/index.js'
export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-scrollTop': ScrollTop
  },
  mounted() {
    hljs.initHighlightingOnLoad()
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
