<template>
  <div class="card">
    <v-image :text="shownArticles[index].name.replace(/\.md/, '')" :imageUrl="require(`~articles/imgs/${shownArticles[index].cover}`)" :url="shownArticles[index].name.replace(/\.md/, '')"></v-image>
    <slot name="article">
      <p class="card__desc">{{shownArticles[index].desc}}</p>
      <div class="card__bottom clearfix">
        <div class="card__bottom__meta">
          <div class="card__bottom__meta__date">
            <time>{{shownArticles[index].date}}</time>
          </div>
          <div class="card__bottom__meta__tags">
            <span v-for="tag in shownArticles[index].tags">{{tag}}</span>
          </div>
        </div>
        <el-button :plain="true" type="info" class="card__bottom__btn" @click="handleClick">阅读</el-button>
      </div>
    </slot>
  </div>
</template>

<script>
import Image from '~components/Image'
import { mapGetters } from 'vuex'
export default {
  name: 'card',
  props: {
    index: Number,
    type: {
      type: String,
      default: ''
    },
    tags: []
  },
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'shownArticles'
    ]),
    date() {
      return Date.now()
    }
  },
  components: {
    'v-image': Image
  },
  mounted() {
    this.$store.dispatch('getArticles')
  },
  methods: {
    handleClick() {
      this.$router.push(`/articles/${this.shownArticles[this.index].name.replace(/\.md/, '')}`)
    }
  }
}
</script>

<style type="stylesheet/scss" lang="scss" scoped>
  @import '../common/mixins.scss';
  $height: 36px;
  $paddingX: 10px;
  $navGutter: 10px;
  $bgColor: #add8e6;
  .card {
    padding: 15px;
    text-align: left;
    border: 1px solid #eee;
    border-radius: 5px;
    background: #fff;
    color: #2c3e50;
    .card__cover {

    }
    .card__title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      transition: all 0.2s ease;
      &:hover {
        .card__title--hover {
          opacity: 1;
        }
      }
    }
    .card__title--hover {
      color: blue;
      opacity: 0;
    }
    .card__title__type {
      color: lightblue;
    }
    .card__desc {
      font-size: 16px;
      font-weight: normal;
      line-height: 18px;
    }
    .card__bottom {
      .card__bottom__meta {
        float: left;
      }
      .card__bottom__meta__date {

      }
      .card__bottom__meta__tags {
        & > span {
          display: inline-block;
          margin-right: 5px;
          padding: 5px;
          border: 1px solid #eee;
          cursor: pointer;
        }
      }
      .card__bottom__btn {
        float: right;
      }
    }
  }
</style>
