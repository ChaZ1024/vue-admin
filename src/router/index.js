import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'

import Home from '@/pages/Home'
import Notfound from '@/pages/Notfound'
import HomeIndex from '@/pages/HomeIndex'
import A from '@/pages/Notfound'

import Routes from "@/components/Routes"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:Routes
})
