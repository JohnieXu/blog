<template>
  <div id="taglist" class="taglist">
    <el-collapse v-model="activeName">
      <el-collapse-item :title="item.tag+' 共'+item.articles.length+'篇'" v-for="item in tagsArticles" :key="item.tag">
        <router-link :to="'/articles/'+article.name | delMd" class="tag--link" v-for="(article, index) in item.articles" :key="index"><span>{{index+1}}.</span>{{article.name}}</router-link>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    // props: {
    //   tags: Array
    // },
    data() {
      return {
        activeName: '1'
      }
    },
    computed: {
      ...mapGetters([
        'tags','tagsArticles'
        ])
    },
    mounted() {
      this.$store.dispatch('getArticles')
      this.$store.dispatch('getTags')
      if (!this.tagsArticles.length) {
        this.$store.dispatch('getTagsArticles')
      }
    },
    filters: {
      delMd(data) {
        return data.replace(/\.md$/, '')
      }
    }
  }
</script>
<style type="stylesheet/scss" lang="scss" scoped>
  @import '../common/mixins.scss';
  .taglist {
    .tag--link {
      display: block;
      margin: 5px 0;
      transition: all 0.2s ease;
      font-size: 14px;
      &:hover {
        color: $light-blue;
      }
    }
  }
</style>
