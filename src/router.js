import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/Success'),
      props: (route) => ({
        name: route.query.name
      })
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    }
  ]
})
