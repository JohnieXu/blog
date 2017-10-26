<template>
  <div id="app">
    <div class="headband"></div>
    <v-header :input="''"></v-header>
    <div class="content">
      <div class="content__aside fl">
        <v-sidebar></v-sidebar>
        <router-view name="articleContents"></router-view>
      </div>
      <div class="content__article fl">
        <transition :name="transitionName">
          <router-view name="articles"></router-view>
          <router-view name="test"></router-view>
        </transition>
      </div>
    </div>
    <v-scrollTop></v-scrollTop>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './views/Sidebar'
// import ArticleContents from './views/ArticleContents'
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
      this.transitionName = to.path === '/' ? 'slide-left' : 'slide-right'
    }
  },
}
</script>

<style lang="scss" type="stylesheets/scss">
// @import './common/common.scss';
@import './common/mixins.scss';
// @import './common/markdown2.scss';
#app {
  min-height: 100vh;
  background: #F5F7F9;
  color: #2c3e50;
  font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .content {
    position: relative;
    margin: 0 auto;
    @media all and (min-width: $sm) {
      width: 960px;
    }
    @media all and (max-width: $sm) {
      width: 100%;
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .content__article {
    width: calc(100% - 240px - 15px);
    background: #fff;
    @media all and (min-width: $sm) {
      float: left;
      margin: 0 0 0 15px;
    }
    @media all and (max-width: $sm) {
      width: 100%;
      margin: 100px auto 0;
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
}
.headband {
  height: 3px;
  background: #222;
}
/* layout */
#sidebar {
  margin: 315px auto 20px;
  @media all and (max-width: 992px) {
    display: none;
  }
  @media all and (min-width: 992px) {
    display: block;
    // float: left;
  }
}
#articlelist {
  // @media all and (min-width: 992px) {
  //   float: left;
  // }
}
</style>
