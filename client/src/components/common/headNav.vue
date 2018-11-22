<template>
  <main  class="img">
    <div class="logo">
      <h2>lbs个人博客</h2>
      <nav id="nav">
        <ul>
          <router-link to="/" ><li id="list">网站首页</li></router-link>
          <router-link to="/photo" ><li>我的相册</li></router-link>
          <router-link to="/aboutme"><li>关于我</li></router-link>
          <router-link to="leavemessage"> <li>留言</li></router-link>
          <router-link to="content"><li>内容页 </li></router-link>
        </ul>
      </nav>
    </div>
  </main>
</template>

<script>

    export default {
        name: "headNav",

    }
</script>

<style scoped>
  @import "../../assets/css/rest.css";
  .img{
    height: 100%;
    line-height: 1.5;

  }
  .logo{
    width: 1000px;
    margin: auto;
    font-size: 26px;
    padding: 20px 0;
    -webkit-text-shadow: 1px 1px 1px rgba(0,0,0,.2);
    -moz-text-shadow: 1px 1px 1px rgba(0,0,0,.2);
    text-shadow: 1px 1px 1px rgba(0,0,0,.2);
  }
  .logo h2{
    color: #fff;
  }
  #nav{
    width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 20px 0;
    font-size: 15px;
  }
  #nav li{
    display: inline-block;
    float: left;
    width: 100px;
    color: #C93282;
    text-align: center;
    overflow: hidden;
    line-height: 30px;
    text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
  }

  #nav li:hover{
    display: block;
    background: #C93282;
    color: #fff;
    border-radius: 0 20px;
    text-shadow: none;
  }
</style>
