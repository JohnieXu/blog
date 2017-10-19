<template>
  <div class="header">
    <div class="header--content-wrapper row">
      <div class="header--nav">
        <ul>
          <li v-for="item in nav"><a href="" class="header--item-link">{{item.text}}</a></li>
        </ul>
        <!-- <ul class="nav-list">
          <li class="nav-list--item"><a href=""><img src="http://iph.hfre.lu/60x60" alt="logo"></a></li>
          <li class="nav-list--item"><a href="">item1</a></li>
          <li class="nav-list--item"><a href="">item2</a></li>
          <li class="nav-list--item"><a href="">item3</a></li>
        </ul> -->
      </div>
      <div class="header--search">
        <el-input v-model="input" placeholder="请输入内容" icon="search" :on-icon-click="handleSearch"></el-input>
      </div>
    </div>
    <!-- <div id="test" class="row">
      <div class="flex1">1</div>
      <div class="flex2">2</div>
      <div class="flex3">3</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    nav: {
      type: Array,
      default: () => [{
        text: 'Logo',
        url: '',
        icon: ''
      }, {
        text: '首页',
        url: '',
        icon: ''
      }, {
        text: '文章',
        url: '',
        icon: '',
        sub: [{
          text: 'html+css',
          url: '',
          icon: ''
        },
        {
          text: 'javascript',
          url: '',
          icon: ''
        },
        {
          text: 'Vue.js',
          url: '',
          icon: ''
        },
        {
          text: 'wapp',
          url: '',
          icon: ''
        },
        {
          text: 'express',
          url: '',
          icon: ''
        }]
      }, {
        text: '项目',
        url: '',
        icon: ''
      }, {
        text: '关于我',
        url: '',
        icon: ''
      }]
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleSearch (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylesheet/scss" lang="scss" scoped>
  @import '../common/mixins.scss';
  $height: 36px;
  $paddingX: 10px;
  $navGutter: 10px;
  $bgColor: #add8e6;
  .header {
    width: 100%;
    background: $bgColor;
    .header--content-wrapper {
      width: 80%;
      max-width: 1000px;
      margin: 0 auto;
      padding: $paddingX 0;
      @media all and (max-width: $xs) {
        width: 100%;
        margin: 0;
      }
    }
    .header--nav {
      @include flex(14);
      @media all and (max-width: $xs) {
        @include flex(1)
      }
    }
    .header--search {
      @include flex(10);
      @media all and (max-width: $xs) {
        display: none;
      }
    }
    .header--item-link {
      height: $height;
      line-height: $height;
      padding: 0 $navGutter;
    }
  }

  /* test */
  .flex1 {
    @include flex(1);
  }
  .flex2 {
    @include flex(9);
  }
  .flex3 {
    @include flex(14);
  }
</style>
