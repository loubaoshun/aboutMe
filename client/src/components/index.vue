<template >
  <section >
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
      <div class="tuijian">
        <h2>站长推荐</h2>
        <ul>
          <li><a href="/">你是什么人便会遇上什么人</a></li>
          <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
          <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
          <li><a href="/">个人博客模板《绅士》后台管理</a></li>
          <li><a href="/">你是什么人便会遇上什么人</a></li>
          <li><a href="/">博客后台管理</a></li>
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
     <div class="r_box" v-for="(item, index,images) in groupList" :key="index">
     <li>
       <i><a href="/"><img :src="item.images"></a></i>
       <h3><a href="/"> {{item.title}}</a></h3>
       <p>{{item.content}}</p>
     </li>
   </div>
     <div class="foot_box"  >
       <el-pagination
         background
         layout="prev, pager, next"
         :total="1000">
       </el-pagination>
     </div>
    </div>
  </section>
</template>

<script>
import headNav from '../components/common/headNav'
import request from '../../utils/request'

export default {
  name: 'index',
  mounted(){
    request({
      url: '/articles/publish',
      method: 'post',
      data:{
        images,
        title,
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

  },


  data () {
    return {
      img: require('../assets/images/4.jpg'),
      one: require('../assets/images/7.png'),
      two: require('../assets/images/8.png'),
      three: require('../assets/images/9.png'),
      four: require('../assets/images/10.png'),
      five: require('../assets/images/11.png'),
      six: require('../assets/images/12.jpg'),
      wx: require('../assets/images/wx.jpg'),
      groupList:[
        {
          images:require('../assets/images/1.jpg'),
          title:'你是什么人便会遇上什么',
          content:'有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。'
        },
        {
          images:require('../assets/images/2.jpg'),
          title:'爱情没有永远，地老天荒也走不完',
          content:'也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，一去不返。徒剩下这荒芜的花好月圆，一路相随，流离天涯背负了谁的思念？',
        },
        {
          images:require('../assets/images/3.jpg'),
          title:'女孩都有浪漫的小情怀——浪漫的求婚词',
          content:'还在为浪漫的求婚词而烦恼不知道该怎么说吗？女孩子都有着浪漫的小情怀，对于求婚更是抱着满满的浪漫期待，也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。'
        },
        {
          images:require('../assets/images/4.jpg'),
          title:'擦肩而过',
          content:'《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的',
        },

      ],
    }
  },
  components:{
    headNav,
  },


}
</script>


<style scoped>
  @import "../assets/css/base.css";
  @import "../assets/css/m.css";
  @import "../assets/css/index.css";
  .foot_box{
    width: 55%;
    float: right;
    padding-top: 80px;
  }
</style>
