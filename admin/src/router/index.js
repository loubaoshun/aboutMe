import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入登录组件
import Login from '@/components/Login'
//引入主页面组件
import List from '@/components/List'
//引入关于我组件
import About from '@/components/About'
//阅读列表组件
import  readList from '@/components/readList'
//引入标签组件
import tags from '@/components/tags'
export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },

    {
      path:'/list',
      component:List
    },
    {
      path:'/readList',
      component:readList
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/tags',
      component:tags
    },
    {path:'*',redirect:'/login'}
  ]
})
