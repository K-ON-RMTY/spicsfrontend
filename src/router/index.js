import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Register from '@/pages/register/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: 'register',
      component: Register
    }
  ]
})
