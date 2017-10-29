<template>
  <div id="app">
    <div class="headband"></div>
    <v-header :input="''"></v-header>
    <div class="content">
      <div class="content__aside fl">
        <v-sidebar></v-sidebar>
        <transition name="slide-right">
          <router-view name="articleContents"></router-view>
        </transition>
      </div>
      <div class="content__article fl">
        <transition :name="'slide-left'">
          <router-view name="articles"></router-view>
          <router-view name="test"></router-view>
        </transition>
      </div>
    </div>
    <div id="search" class="search" v-if="searchShow">
      <div class="search__overplay" @click="toggleSearch"></div>
      <div class="search__container">
        <div class="search__input">
          <div class="search__input__icon">
            <i class="fa fa-search"></i>
          </div>
          <div class="search__input__input">
            <input type="text" placeholder="搜索" autofocus>
          </div>
        </div>
        <div class="search__results">
          <div class="result-list">
            <div class="list">
              <div class="list-item"><a class="link" href=""><em class="highlight">L</em>orem ipsum dolor.</a></div>
              <div class="list-item"><a class="link" href=""><em class="highlight">L</em>orem ipsum dolor.</a></div>
              <div class="list-item"><a class="link" href=""><em class="highlight">L</em>orem ipsum dolor.</a></div>
              <div class="list-item"><a class="link" href=""><em class="highlight">L</em>orem ipsum dolor.</a></div>
              <div class="list-item"><a class="link" href=""><em class="highlight">L</em>orem ipsum dolor.</a></div>
            </div>
          </div>
          <div class="pagination">
            <ul class="list">
              <li class="list-item"><a class="link" href=""><i class="icon fa fa-angle-left"></i></a></li>
              <li class="list-item"><a class="link link--active" href="">1</a></li>
              <li class="list-item"><a class="link" href="">2</a></li>
              <li class="list-item"><a class="link" href="">3</a></li>
              <li class="list-item"><a class="link" href="">4</a></li>
              <li class="list-item"><a class="link" href="">5</a></li>
              <li class="list-item"><a class="link" href=""><i class="icon fa fa-angle-right"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="search__close" @click="toggleSearch"><i class="search__close__icon fa fa-close"></i></div>
      </div>
    </div>
    <v-scrollTop></v-scrollTop>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './views/Sidebar'
// import ArticleContents from './views/ArticleContents'
import ScrollTop from './components/ScrollTop'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  computed: {
    ...mapState([
      'searchShow',
      'allTags'
    ])
  },
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
    'v-scrollTop': ScrollTop,
  },
  methods: {
    ...mapActions([
        'toggleSearch'
      ])
  },
  mounted() {

  },
  watch: {
    '$route' (to, from) {
      this.transitionName = to.path === '/' ? 'slide-up' : 'slide-down'
    }
  },
}
</script>

<style lang="scss" type="stylesheets/scss">
// @import './common/common.scss';
@import './common/mixins.scss';
// @import './common/markdown2.scss';
#app {
  min-height: 100vh;
  background: #F5F7F9;
  color: #2c3e50;
  font-family: 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .content {
    position: relative;
    margin: 0 auto;
    @media all and (min-width: $sm) {
      width: 960px;
    }
    @media all and (max-width: $sm) {
      width: 100%;
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
  .content__article {
    width: calc(100% - 240px - 15px);
    background: #fff;
    @media all and (min-width: $sm) {
      float: left;
      margin: 0 0 0 15px;
    }
    @media all and (max-width: $sm) {
      width: 100%;
      margin: 100px auto 0;
    }
    &:after {
      display: block;
      content: "";
      clear: both;
    }
  }
}
.headband {
  height: 3px;
  background: #222;
}
/* layout */
#sidebar {
  margin: 360px auto 20px;
  @media all and (max-width: 992px) {
    display: none;
  }
  @media all and (min-width: 992px) {
    display: block;
    // float: left;
  }
}
#articlelist {
  // @media all and (min-width: 992px) {
  //   float: left;
  // }
}
/* search */
#search {
  transition: all 0.5s ease;
  .search__overplay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9990;
    background-color: rgba(0,0,0,0.3)
  }
  .search__container {
    position: fixed;
    top: 10%;
    left: 50%;
    width: 700px;
    height: 80%;
    padding: 0;
    overflow: hidden;
    margin-left: -350px;
    background: #fff;
    color: #333;
    z-index: 9999;
    border-radius: 5px;
    @media all and (max-width: 768px) {
      top: 0;
      left: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
  .search__input {
    padding: 10px 10px 5px;
    font-size: 0;
    background: #f5f5f5;
    border-bottom: 1px solid #ccc;
  }
  .search__input__icon {
    display: inline-block;
    width: 30px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  .search__input__input {
    display: inline-block;
    width: calc(90% - 40px);
    input {
      width: 100%;
      padding: 5px 0;
      outline: none;
      border: none;
      font-size: 16px;
      text-indent: 5px;
      color: #333;
    }
  }
  .search__results {
    padding: 10px 30px;
    height: calc(100% - 76px);
    .result-list {
      color: #555;
      .list {

      }
      .list-item {
        margin: 15px 0;
        .link {
          display: inline-block;
          width: 100%;
          color: #555;
          border-bottom: 1px dashed #ccc;
          word-break: break-word;
          font-size: 14px;
          &:hover {
            color: #222;
            border-bottom-color: #222;
          }
        }
        .highlight {
          padding: 0 5px;
          background: #f7f7f7;
          color: #f00;
          font-style: normal;
        }
      }
    }
    .pagination {
      color: #555;
      .list {
        margin: 40px auto;
        text-align: center;
      }
      .list-item {
        display: inline-block;
        text-align: center;
        .link {
          display: inline-block;
          margin: 0 10px;
          padding: 0 10px;
          font-size: 14px;
          line-height: 30px;
          &.link--active {
            background: #ccc;
            color: #fff;
          }
          &:hover {
            border-bottom: 1px solid #222;
          }
        }
      }
    }
  }
  .search__close {
    position: absolute;
    top: 17px;
    right: 14px;
    padding-left: 15px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    border-left: 1px solid #eee;
    &:hover {
      .search__close__icon {
        color: #222;
      }
    }
  }
  .search__close__icon {
    font-size: 20px;
    color: #999;
  }
}
/* transition */
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.slide-right-enter-to,
.slide-right-leave {
  transform: translateX(0);
}
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(.06,.25,.46,1.42) 0.4s;
}
.fade-left-active,
.fade-left-leave-active {
  transition: all 0.4s cubic-bezier(.06,.25,.46,1.42) 0.4s;
}
.slide-left-enter-to,
.slide-left-leave {
  transform: translateX(0);
}
.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(.06,.25,.46,1.42);
}
.slide-up-enter-to,
.slide-up-leave {
  transform: translateY(0);
}
.slide-up-enter,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(.06,.25,.46,1.42);
}
.slide-down-enter-to,
.slide-down-leave {
  transform: translateY(0);
}
.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(.06,.25,.46,1.42);
}
</style>
