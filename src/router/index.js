import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/search'
import Auth from '@/components/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
      children: [
        {
          path: '/login',
          name: 'Login',
          redirect: to => {
            window.location = 'http://localhost:8080/login'
          }
        },
        {
          path: '/logout',
          name: 'Logout',
          redirect: to => {
            window.location = 'http://localhost:8080/logout'
          }
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/auth/:accessToken/:refreshToken',
      name: 'Auth',
      component: Auth
    }
  ]
})
