<template>
  <div class="articlecontents">
    <h3 class="articlecontents__title"><i class="fa fa-list"></i>文章目录</h3>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script>
  export default {
    name: "ArticleContents",
    data() {
      return {
        data: [{
          label: '1',
          children: [{
            label: '1-1'
          },{
            label: '1-2'
          }]
        },{
          label: '2',
          children: [{
            label: '2-1'
          },{
            label: '2-2'
          }]
        },{
          label: '3',
          children: [{
            label: '3-1'
          }]
        }],
        defaultProps: 'aaaa'
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>
<style type="stylesheet/scss" lang="scss">
  @import '../common/mixins.scss';
  .articlecontents {
    background: #fff;
  }
  .articlecontents__title {
    margin: 0;
    padding: 10px 0;
    font-size: 16px;
    text-indent: 6px;
    .fa {
      margin-right: 5px;
      color: $light-blue;
    }
  }
  .el-tree {
    border: none;
    text-indent: 6px;
  }
</style>
