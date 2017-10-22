import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: (resolve) => import('@/components/HelloWorld')
    },
    {
      path: '*',
      component: (resolve) => import('@/views/404')
    },
    {
    	path: '/article',
    	name: 'Article',
    	component: (resolve) => import('@/views/Article')
    }
  ]
})
