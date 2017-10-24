<template>
  <div id="header" class="header">
    <div class="header__inner">
      <div class="site-brand-container">
        <div class="header__inner__logo"><a href="/">JohnieXu's Blog</a></div>
        <div class="header__inner__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <div class="header__inner__toggle"><div class="button"><i class="fa fa-navicon"></i></div></div>
      </div>
      <div class="site-nav-container">
        <ul id="menu" class="header__menu">
          <li class="menu-item menu-item--active"><a href=""><i class="menu-item__icon fa fa-home"></i>首页</a></li>
          <li class="menu-item"><a href=""><i class="menu-item__icon fa fa-folder"></i>文章</a></li>
          <li class="menu-item"><a href=""><i class="menu-item__icon fa fa-tags"></i>标签</a></li>
          <li class="menu-item"><a href=""><i class="menu-item__icon fa fa-search"></i>搜索</a></li>
        </ul>
        <div id="search-container" class="header__inner__search">search...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    nav: {
      type: Array,
      default: () => [{
        text: 'Logo',
        url: '/',
        icon: ''
      }, {
        text: '首页',
        url: '/',
        icon: ''
      }, {
        text: '文章',
        url: '/articles',
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
        url: '/project',
        icon: ''
      }, {
        text: '关于我',
        url: '/about',
        icon: ''
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
    fixed() {
      return this.$store.state.headerFixed
    }
  },
  methods: {
    handleSearch (e) {
      console.log(e)
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
  
  .header {
   position: relative;
   margin: 0 auto;
  }
  .header__inner {
   .site-brand-container {
      padding: 20px 0;
      color: #fff;
      background: #222;
    }
  }
  .site-brand-container {
   text-align: center;
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
        padding: 5px 20px;
        text-align: left;
        line-height: inherit;
        transition: background-color 0.2s ease;
        font-size: 14px;
      }
      &:hover {
        background: #F9F9F9;
      }
   }
    .menu-item--active {
      background: #F9F9F9;
    }
    .menu-item--active:after {
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
    .menu-item__icon {
      margin-right: 10px;
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
