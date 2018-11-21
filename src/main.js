// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
Vue.use(ElementUI)

Vue.config.productionTip = false

import store from './store'


router.beforeEach((to, from, next) => {
  //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子

  if (to.matched.length === 0) { //如果未匹配到路由
    // console.log(  from )
    next({
      path: '/404'
    })
    // from.name ? next({
    //   name: from.name
    // }) : next('/404'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    if (to.path === '/login') {
      next()
    } else { //进入的不是登录路由
      if (to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
        next({
          path: '/login'
        })
      } else {
        next();
        if (to.matched.length === 0) { //如果未匹配到路由
          from.name ? next({
            name: from.name
          }) : next('/404'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
        } else {
          next(); //如果匹配到正确跳转
        }
      }
    } //如果不需要登录验证，或者已经登录成功，则直接放行
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
