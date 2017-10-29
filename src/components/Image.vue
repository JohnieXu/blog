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
      imageOpacity: {
        type: Number,
        default: 0.6
      },
      text: String,
      url: String
    },
    data() {
      return {
        imageStyle: {
          paddingBottom: (this.ratio || 56) + '%',
          backgroundImage: `url('${this.imageUrl}')`,
          opacity: `${this.imageOpacity}`
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
    overflow: hidden;
    &:hover .image__cover {
      opacity: 1!important;
      transform: scale(1.1);
    }
  }
  .image__cover {
    transition: all 0.2s ease;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .image__title {
    position: absolute;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 20px 10px 10px;
    color: #555;
    background: linear-gradient(to top, rgba(250, 250, 250, 0.6), rgba(250, 250, 250, 0));
    font-size: 24px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: nowrap;
  }
  .image__title--link {
    cursor: pointer;
  }
</style>
