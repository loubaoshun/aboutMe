<template>
  <section>
    <head-nav></head-nav>
    <div class="logo">
      <div class="l_box">
        <div class="about_me">
          <h2>关于我</h2>
          <ul class="me">
            <i><img :src="img"></i>
            <p><b>娄保顺</b>，一个90后小白！16年入行。一直潜心研究web前端技术，一边工作一边积累经验,积极向上，以及一些学习心得等。</p>
          </ul>
        </div>
        <div class="wdxc">
          <h2>我的相册</h2>
          <ul>
            <li><img :src="one" alt=""></li>
            <li><img :src="two" alt=""></li>
            <li><img :src="three" alt=""></li>
            <li><img :src="four" alt=""></li>
            <li><img :src="five" alt=""></li>
            <li><img :src="six" alt=""></li>
          </ul>
        </div>
        <div class="search">
          <form action="/e/search/index.php" method="post" name="searchform" id="searchform">
            <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
            <input name="show" value="title" type="hidden">
            <input name="tempid" value="1" type="hidden">
            <input name="tbname" value="news" type="hidden">
            <input name="Submit" class="input_submit" value="搜索" type="submit">
          </form>
        </div>
        <div class="fenlei">
          <h2>文章分类</h2>
          <ul>
            <li><a href="/">学无止境（33）</a></li>
            <li><a href="/">日记（19）</a></li>
            <li><a href="/">慢生活（520）</a></li>
            <li><a href="/">美文欣赏（40）</a></li>
          </ul>
        </div>
        <div class="links">
          <h2>友情链接</h2>
          <ul>
            <a href="/">lbs个人博客</a> <a href="/">lbs博客</a>
          </ul>
        </div>
        <div class="guanzhu">
          <h2>关注我</h2>
          <ul>
            <img :src="wx">
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import headNav from '../components/common/headNav'
    export default {
        name: "leavemessage",
      data(){
        return{
          img: require('../assets/images/4.jpg'),
          one: require('../assets/images/7.png'),
          two: require('../assets/images/8.png'),
          three: require('../assets/images/9.png'),
          four: require('../assets/images/10.png'),
          five: require('../assets/images/11.png'),
          six: require('../assets/images/12.jpg'),
          wx: require('../assets/images/wx.jpg'),
        }

      },

        components:{
        headNav,
      }
    }
</script>

<style scoped>
  @import "../assets/css/base.css";
  @import "../assets/css/m.css";
  @import "../assets/css/index.css";
</style>
