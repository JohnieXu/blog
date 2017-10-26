<template>
  <div id="articlelist">
    <el-row>
      <el-col class="article__box" :xs="24" :sm="24" :md="12" :lg="12" v-for="(item, index) in shownArticles" :key="item.name">
        <v-card :index="index" :title="item.name.replace(/\.md/, '')"></v-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'Articlelist',
    components: {
      'v-card': () => import('@/components/Card')
    },
    computed: {
      ...mapGetters([
        'shownArticles'
      ])
    },
    mounted() {
      this.$store.dispatch('getArticles')
    }
  }
</script> 

<style type="stylesheet/scss" lang="scss" scoped>
  @import '../common/mixins.scss';
  #articlelist {
    // width: calc(100% - 240px - 15px);
    // max-width: 1000px;
    // margin: 0 auto;
    // @media all and (min-width: $sm) {
    //   margin: 0 0 0 15px;
    // }
    // @media all and (max-width: $sm) {
    //   width: 100%;
    //   margin: 100px auto 0;
    // }
    .article__box {
      padding: 20px;
      @media all and (max-width: $md) {
        padding: 10px;
      }
      @media all and (max-width: $sm) {
        padding: 8px 8px;
      }
      @media all and (max-width: $xs) {
        padding: 8px 0;
      }
    }
  }
</style>
