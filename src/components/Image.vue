<template>
  <div class="image">
    <div class="image__cover" :style="imageStyle"></div>
    <div class="image__title" :class="{'image__title--link': url}" @click="handleClick">{{text}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      imageUrl: String,
      imageRatio: {
        type: String,
        default: '16:9'
      },
      text: String,
      url: String
    },
    data() {
      return {
        imageStyle: {
          paddingBottom: (this.ratio || 56) + '%',
          backgroundImage: `url('${this.imageUrl}')`
        }
      }
    },
    computed: {
      ratio() {
        let a, str = this.imageRatio, reg = new RegExp('[:|x|y]')
        let strArr = str.split(reg)
        a = Math.round( Number(strArr[1]) / Number(strArr[0]) * 100 )
        return a
      }
    },
    methods: {
      handleClick() {
        this.$router.push(`/articles/${this.url}`)
      }
    }
  }
</script>
<style type="stylesheet/scss" lang="scss">
  .image {
    position: relative;
  }
  .image__cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .image__title {
    position: absolute;
    left: 15px;
    bottom: 10px;
    padding: 10px 0;
    font-size: 24px;
    font-weight: 600;
  }
  .image__title--link {
    cursor: pointer;
  }
</style>
