import Vue from 'vue'
import Router from 'vue-router'
import articlesInfo from '~articles/articles.json'
// import HelloWorld from '~components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('~components/HelloWorld')
  },
  {
    path: '/articles',
    component: () => import('~views/Articles')
  },
  {
    path: '*',
    component: () => import('~views/404')
  }
]

Object.keys(articlesInfo).forEach((key) => {
  routes.splice(2, 0, {
    path: `/articles/${key.replace(/\.md/, '')}`,
    component: () => import(`~articles/${key}`)
  })
})

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
