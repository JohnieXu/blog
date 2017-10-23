<template>
  <div class="card">
    <!-- <el-row> -->
      <!-- <el-col> -->
        <el-card>
          <img class="card--cover" src="http://iph.href.lu/200x160" :alt="'card image'">
          <slot name="article">
            <h3 class="card--title"><a href=""><span class="card--title__hover">#</span>{{title}}<span class="card--title--type">{{type}}</span></a></h3>
            <p class="card--desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere corrupti illo incidunt. Quo tenetur adipisci natus totam eum amet autem animi, voluptates. Repellendus, ab rerum, laudantium quidem quae voluptatem sapiente.</p>
            <div class="card--bottom clearfix">
              <div class="card--bottom--meta">
                <div class="card--bottom--meta--date">
                  <time>{{date}}</time>
                </div>
                <div class="card--bottom--meta--tags">
                  <span v-for="tag in 3">{{tag}}</span>
                </div>
              </div>
              <el-button :plain="true" type="info" class="card--bottom--btn" @click="handleClick">阅读</el-button>
            </div>
          </slot>
        </el-card>
      <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    type: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: () => new Date()
    },
    tags: []
  },
  data () {
    return {
      
    }
  },
  methods: {
    handleClick() {
      console.log('click')
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
    text-align: left;
    .card--cover {

    }
    .card--title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
    .card--title__hover {
      /*color: blue;*/
    }
    .card--title--type {
      color: lightblue;
    }
    .card--desc {
      font-size: 16px;
      font-weight: normal;
      line-height: 18px;
    }
    .card--bottom {
      .card--bottom--meta {
        float: left;
      }
      .card--bottom--meta--date {

      }
      .card--bottom--meta--tags {
        & > span {

        }
      }
      .card--bottom--btn {
        float: right;
      }
    }
  }
</style>
