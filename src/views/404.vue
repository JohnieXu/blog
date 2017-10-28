<template>
  <div class="wrong">
    <section>
      <i class="el-icon-information"></i>
    </section>
    <section>
      <h1>Page not found.</h1>
    </section>
    <section>
      <h2><router-link to="/"><i class="el-icon-arrow-left"></i>回主页</router-link></h2>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style type="stylesheets/scss" lang="scss">
@import '../common/mixins.scss';
.wrong {
  padding: 50px;
  text-align: center;
  .el-icon-information {
    font-size: 60px;
    color: #F44336;
  }
  a {
    color: inherit;
  }
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
    &:hover {
      color: $light-blue;
    }
  }
}
</style>
