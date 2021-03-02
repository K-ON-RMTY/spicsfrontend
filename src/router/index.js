import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Register from '@/pages/register/Register'
import Setting from '@/pages/setting/Setting'
import Space from '@/pages/space/Space'
import Follow from '@/pages/follow/Follow'
import Search from '@/pages/search/Search'
import ImgInfo from '@/pages/imgInfo/ImgInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/setting',
      component: Setting
    },
    {
      path: '/space',
      component: Space
    },
    {
      path: '/follow/:id',
      component: Follow
    },
    {
      path: '/search/:kw',
      component: Search
    },
    {
      path: '/info/:id',
      component: ImgInfo
    },
  ]
})
