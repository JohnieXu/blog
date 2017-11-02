<template>
  <div id="homelist" class="homelist">
    <v-article></v-article>
    <!-- <div class="homelist__pagination" v-if="showPagination">
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div> -->
    <div id="home-article"></div>
    <div class="homelist__nextarticle" v-show="recArticles.length > 1">
      <el-button type="primary" round><router-link to="/articles">查看更多</router-link></el-button>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Vue from 'vue'
  export default {
    computed: {
      ...mapGetters([
        'allArticles',
        'recArticles'
        ]),
      // showPagination() {
      //   return this.recArticles.length > 5
      // }
      curArticle() {
        return {
          index: 1,
          all: this.recArticles.length,
          name: this.recArticles[0].name
        }
      }
    },
    components: {
      'v-article': () => import(`~articles/sphinx.md`)
    },
    methods: {
      
    },
    created() {
      if (this.allArticles.length == 0) {
        this.$store.dispatch('getArticles')
      }
    },
    mounted() {
      let comp = require(`~articles/${this.recArticles[0].name}`)
      console.log(comp)
      let _comp = Vue.extend(comp)
      console.log(_comp)
      new _comp({el: '#home-article'})
    }
  }
</script>
<style type="stylesheet/scss" lang="scss">
  @import '../common/mixins.scss';
  .homelist {
    padding-bottom: 20px;
  }
  .homelist__pagination {
    margin: 0 auto;
    text-align: center;
    .el-pager {
      .active {
        background-color: $light-blue;
        border-color: $light-blue;
      }
    }
  }
  .homelist__nextarticle {
    margin: 0 auto;
    text-align: center;
    .el-button {
      padding: 15px;
      background-color: $light-blue;
      border-color: $light-blue;
      font-size: 1em;
    }
  }
</style>
