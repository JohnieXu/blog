<template>
  <transition name="toLeft">
    <span class="scrollTop" @click="scrollTop" v-show="show">^</span>
  </transition>
</template>
<script type="ecmascript-6">
  export default {
    data() {
      return {
        isShow: false
      };
    },
    props: {
      showScrollTopPos: {
        type: Number,
        default: 150
      }
    },
    computed: {
      show: {
        get() {
          return this.isShow;
        },
        set: function (val) {
          this.isShow = val;
        }
      }
    },
    methods: {
      scrollTop() {
        let firstHeight = document.body.scrollTop || document.documentElement.scrollTop; // 开始回顶部时滑块离顶部高度
        let time = 0.4; // 预设动画持续时间
        // let speed = 8000; // 动画速度 px/s
        let speed = Math.round(firstHeight / time) * 2;
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop; // 初始scrollTop
        let scrollTopDOM = document.body || document.documentElement;
        let duration = scrollTop / speed * 1000; // 动画总时间
        let sep = 1; // 动画间隔
        let times = duration / sep; // 执行次数
        let length = scrollTop / times; // 一次减少长度
        let timer = window.setInterval(() => {
          let scrollTop = document.body.scrollTop;
          scrollTopDOM.scrollTop = scrollTop - length;
          if (scrollTop <= 0) {
            window.clearInterval(timer);
          }
        }, sep);
      }
    },
    created() {
      let vm = this;
      window.addEventListener('scroll', function () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        vm.show = scrollTop >= vm.showScrollTopPos;
        // console.log(vm.show);
      }, false);
    },
    destroyed() {
      window.removeEventListener('scroll', function() {}, false);
    }
  }
</script>
<style lang="scss" type="stylesheet/scss">
  $right: 30px;
  $bottom: 30px;
  $width: 40px;
  $height: 40px;
  $bgColor: dodgerblue;
  $hoverColor: cadetblue;

  .scrollTop {
    position: fixed;
    right: $right;
    bottom: $bottom;
    width: $width;
    height: $height;
    line-height: 47px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    background: $bgColor;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    z-index: 9999;
    &:hover {
      background: $hoverColor;
    }
  }
  .toLeft-enter {
    transform: translate3d(100px, 0, 0);
  }
  .toLeft-enter-to, .toLeft-leave {
    transform: translate3d(0, 0, 0);
  }
  .toLeft-enter-active, .toLeft-leave-active {
    transition: transform 0.3s ease;
  }
  .toLeft-leave-to {
    transform: translate3d(100px, 0, 0);
  }
</style>
