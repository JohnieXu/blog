<template>
  <div id="sidebar" class="sidebar">
    <div class="sidebar__inner">
      <div class="sidebar__author">
        <div class="sidebar__author__info">
          <img src="http://iph.href.lu/50x50" alt="" class="avatar">
          <h2 class="nickname">JohnieXu</h2>
          <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div class="links">
            <span class="link-item"><a href=""><i class="icon fa fa-github"></i>Github</a></span>
            <span class="link-item"><a href=""><i class="icon fa fa-weibo"></i>微博</a></span>
            <span class="link-item"><a href=""><i class="icon fa fa-link"></i>知乎</a></span>
            <span class="link-item"><a href=""><i class="icon fa fa-link"></i>豆瓣</a></span>
          </div>
        </div>
      </div>
      <div class="sidebar__classes">
        
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style type="stylesheet/scss" lang="scss">
  .sidebar {
    width: 240px;
    text-align: center;
    background: #fff;
    @media all and (min-width: 992px) {
      display: none;
    }
  }
  .sidebar__inner {
    padding: 20px 10px;
  }
  .sidebar__author__info {
    .avatar {
      display: block;
      margin: 0 auto;
      padding: 3px;
      min-width: 80px;
      max-width: 120px;
      height: auto;
      border: 1px solid #eee;
    }
    .nickname {
      margin: 0;
      color: #222;
      font-size: 16px;
      font-weight: 600;
    }
    .desc {
      margin-top: 0;
      line-height: 1.2;
      text-align: center;
      font-size: 14px;
      color: #999;
    }
    .links {
      text-align: left;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
    }
    .link-item {
      width: 50%;
      float: left;
      box-sizing: border-box;
      margin-top: 10px;
      &:hover {
        background: #eee;
      }
      a {
        display: block;
        padding: 0 10px;
        font-size: 14px;
      }
      .icon {
        margin-right: 10px;
      }
    }
  }
</style>
