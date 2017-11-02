<template>
  <div class="articlecontents">
    <h3 class="articlecontents__title"><i class="fa fa-list"></i>文章目录</h3>
    <el-tree :data="contents" :props="defaultProps" :default-expand-all="true" empty-text="没有目录" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "ArticleContents",
    data() {
      return {
        defaultProps: {
          label: 'name',
          children: 'descendants'
        }
      }
    },
    computed: {
      ...mapGetters([
        'shownArticles',
        'allArticles'
        ]),
      contents() {
        if (this.shownArticles.length == 0) {
          this.$store.dispatch('getArticles')
          for (let i = 0, len = this.allArticles.length; i < len; i++) {
            if (this.allArticles[i].name == this.$route.matched[0].meta.name) {
              return this.allArticles[i].contents
            }
          }
        } else {
          for (let i = 0, len = this.shownArticles.length; i < len; i++) {
            if (this.shownArticles[i].name == this.$route.matched[0].meta.name) {
              return this.shownArticles[i].contents
            }
          }
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    },
    mounted() {
      // console.log(this.$route)

      for (let i = 0, len = this.shownArticles.length; i < len; i++) {
        if (this.shownArticles[i].name == this.$route.matched[0].meta.name) {
          console.log(this.shownArticles[i])
        }
      }
    }
  }
</script>
<style type="stylesheet/scss" lang="scss">
  @import '../common/mixins.scss';
  .articlecontents {
    background: #fff;
  }
  .articlecontents__title {
    margin: 0;
    padding: 10px 0;
    font-size: 16px;
    text-indent: 6px;
    .fa {
      margin-right: 5px;
      color: $light-blue;
    }
  }
  .el-tree {
    border: none;
    text-indent: 6px;
  }
</style>
