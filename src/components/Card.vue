<template>
  <div class="card">
    <v-image :text="shownArticles[index].name.replace(/\.md/, '')" :imageUrl="require(`~articles/imgs/${shownArticles[index].cover}`)" :url="shownArticles[index].name.replace(/\.md/, '')"></v-image>
    <slot name="article">
      <p class="card__desc">{{shownArticles[index].desc}}</p>
      <div class="card__bottom clearfix">
        <div class="card__bottom__meta">
          <div class="card__bottom__meta__date">
            <span>发布时间：</span><time>{{shownArticles[index].date}}</time>
          </div>
          <div class="card__bottom__meta__tags">
            <span class="tag" v-for="tag in shownArticles[index].tags" @click="selectTag" :data-tag-name="tag">{{tag}}</span>
          </div>
        </div>
        <!-- <el-button :plain="true" type="info" class="card__bottom__btn" @click="handleClick">阅读</el-button> -->
      </div>
    </slot>
  </div>
</template>

<script>
import Image from '~components/Image'
import { mapActions, mapGetters } from 'vuex'
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
    selectTag(e) {
      this.$store.dispatch('selectTag', e.currentTarget.dataset.tagName)
      this.$message({
        message: '文章分类：' + e.currentTarget.dataset.tagName,
        type: 'success'
      })
    },
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
    .card__title__type {
      color: lightblue;
    }
    .card__desc {
      font-size: 16px;
      font-weight: normal;
      line-height: 1.2;
    }
    .card__bottom {
      .card__bottom__meta {
        // float: left;
        vertical-align: middle;
      }
      .card__bottom__meta__date {
        font-size: 14px;
        line-height: 1;
        span {
          color: $text-gray;
        }
        time {
          color: $text-gray;
          font-style: italic;
          &:hover {
            color: $text-gray-hover;
          }
        }
      }
      .card__bottom__meta__tags {
        margin-top: 6px;
        font-size: 16px;
        line-height: 1;
        & > span {
          display: inline-block;
          margin-right: 5px;
          padding: 5px;
          border: 1px solid #eee;
          cursor: pointer;
          background: #fff;
          &:hover {
            background: #F9F9F9;
          }
        }
        .tag {
          color: $light-blue;
        }
      }
      .card__bottom__btn {
        float: right;
        vertical-align: middle;
      }
    }
  }
</style>
