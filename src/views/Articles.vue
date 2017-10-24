<template>
  <div id="article">
    <el-row>
      <el-col class="article--box" :xs="24" :sm="12" :md="8" :lg="8" v-for="item in shownArticles" :key="item.name">
        <v-card></v-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'Article',
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
  #article {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    @media all and (max-width: $xs) {
      width: 100%;
      margin: 0;
    }
    .article--box {
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
