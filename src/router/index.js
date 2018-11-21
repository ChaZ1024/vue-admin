import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

import Home from '@/pages/Home'
import Notfound from '@/pages/Notfound'

import A from '@/pages/Notfound'

Vue.use(Router)

export default new Router({
    mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: "index",
          component: Notfound,
          name:"Index",
          meta: {
          requiresAuth: true
        }},
       ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/404',
      name: '404',
      component: Notfound
    }
  ]
})
