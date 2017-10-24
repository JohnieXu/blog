<template>
  <div id="app">
    <div class="headband"></div>
    <v-header :input="''"></v-header>
    <v-sidebar></v-sidebar>
    <router-view/>
    <v-scrollTop></v-scrollTop>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './views/Sidebar'
import ScrollTop from './components/ScrollTop'
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
    'v-scrollTop': ScrollTop,
  },
  mounted() {

  },
  watch: {
    $route (to, from) {
      to.path === '/' ? this.transitionName = 'slide-left' : this.transitionName = 'slide-right'
    }
  },
}
</script>

<style lang="scss" type="stylesheets/scss">
@import './common/common.scss';
@import './common/markdown2.scss';
#app {
  color: #2c3e50;
  font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
}
.headband {
  height: 3px;
  background: #222;
}
/* layout */
#sidebar {

}
#article {

}
</style>
