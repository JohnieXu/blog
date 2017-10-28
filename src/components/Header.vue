<template>
  <div id="header" class="header">
    <div class="header__inner">
      <div class="site-brand-container">
        <div class="header__inner__logo"><a href="/">JohnieXu's Blog</a></div>
        <div class="header__inner__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div class="header__inner__toggle" @click="toggleNav"><div class="button"><i class="fa fa-navicon"></i></div></div>
      </div>
      <div class="site-nav-container" v-show="menuShow">
        <ul id="menu" class="header__menu">
          <li class="menu-item" v-for="item in nav" :key="item.text"><router-link :to="item.url" v-if="item.url"><i :class="`menu-item__icon fa fa-${item.icon}`"></i>{{item.text}}</router-link><a href="javascript:void(0);" v-if="!item.url" @click.default="toggleSearch"><i :class="`menu-item__icon fa fa-${item.icon}`"></i>{{item.text}}</a></li>
        </ul>
        <div id="search-container" class="header__inner__search">search...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'header',
  props: {
    nav: {
      type: Array,
      default: () => [{
        text: '首页',
        url: '/',
        icon: 'home'
      }, {
        text: '文章',
        url: '/articles',
        icon: 'folder',
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
        url: '/works',
        icon: 'book'
      },{
        text: '标签',
        url: '/tags',
        icon: 'tags'
      }, {
        text: '搜索',
        url: '',
        icon: 'search',
        handler: 'toggleSearch'
      }]
    },
    input: {
      type: String
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    // fixed() {
    //   return this.$store.state.headerFixed
    // }
    ...mapState([
        'menuShow'
      ])
  },
  methods: {
    ...mapActions([
        'toggleSearch',
        'toggleNav'
      ])
  }
}
</script>

<style type="stylesheet/scss" lang="scss" scoped>
  @import '../common/mixins.scss';
  $height: 36px;
  $paddingX: 10px;
  $navGutter: 10px;
  $bgColor: #add8e6;
  
  .header {
   position: relative;
   margin: 0 auto;
   z-index: 9;
  }
  .header__inner {
    background: #fff;
   .site-brand-container {
      padding: 20px 50px;
      color: #fff;
      // background: #222;
      background: $dark;
      text-align: center;
    }
    .site-nav-container {
      transition: all 0.4s ease;
    }
  }
  .header__inner__logo a {
   display: inline-block;
   width: 100%;
   line-height: 36px;
   font-size: 24px;
   font-weight: normal;
   font-family: 'Rosario', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
   text-align: center;
   color: #000;
   text-decoration: none;
  }
  #menu {
   margin: 20px 0;
   color: #555;
   .menu-item {
      position: relative;
      display: block;
      a {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding: 10px 20px;
        text-align: left;
        line-height: inherit;
        transition: background-color 0.2s ease;
        font-size: 16px;
        &.router-link-exact-active {
          background: #F9F9F9;
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            right: 15px;
            width: 6px;
            height: 6px;
            margin-top: -6px;
            border-radius: 50%;
            background-color: #bbb;
          }
        }
      }
      &:hover {
        background: #F9F9F9;
      }
    }
    .menu-item__icon {
      margin-right: 10px;
      color: $light-blue;
    }
  }
  #search-container {
   display: none;
  }
  /* more thatn 992px => md lg */
  @media all and (min-width: 992px) {
    .header {
      width: 960px;
    }
    .header__inner {
      position: absolute;
      top: 0;
      overflow: hidden;
      padding: 0;
      width: 240px;
      background: #fff;
      /*box-shadow: initial;*/
      /*border-radius: initial;*/
    }
    .header__inner__toggle {
      display: none;
    }
    .header__inner__logo {
      color: #fff;
      a {
        width: 100%;
        color: #fff;
      }
    }
  }

 /* less than 992px => xs sm */
 @media all and (max-width: 992px) {
  .header {
   position: relative;
   margin: 0 auto;
   width: 100%;
  }
  .header__inner {
   position: absolute;
   top: 0;
   overflow: hidden;
   padding: 0;
   width: 100%;
   text-align: center;
   /*box-shadow: initial;*/
   /*border-radius: initial;*/
  }
  .site-brand-container {
   position: relative;
  }
  .header__inner__toggle {
   position: absolute;
   left: 20px;
   top: 50%;
   transform: translateY(-50%);
   display: block;
   .button {
     padding: 10px;
     font-size: 24px;
     line-height: 24px;
     cursor: pointer;
     &:hover {
      color: $light-blue;
     }
   }
  }
  .header__inner__logo {
    color: #fff;
    a {
      width: 100%;
      color: #fff;
    }
  }
  #menu {
   text-align: left;
  }
}
</style>
