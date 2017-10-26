<template>
  <div class="articlecontents">
    <h2>contents</h2>
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
        }]
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
  .articlecontents {
    background: #fff;
  }
</style>
