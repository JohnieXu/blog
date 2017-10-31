import Vue from 'vue'
import Router from 'vue-router'
import articlesInfo from '~articles/articles.json'

Vue.use(Router)

const works = {
  template: `
    <h1>works</h1>
  `
}
const tags = {
  template: `
    <h1>tags</h1>
  `
}

const routes = [
  {
    path: '/',
    components: {
      test: () => import('~views/Articlelist')
    },
    meta: {
      type: 'home'
    }
  },
  {
    path: '/articles',
    components: {
      articles: () => import('~views/Articlelist')
    },
    meta: {
      type: 'articles'
    }
  },
  {
    path: '/test/card',
    components: {
      test: () => import('~components/Card')
    }
  },{
    path: '/works',
    components: {
      test: works
    }
  },{
    path: '/tags',
    components: {
      test: () => import('~views/Taglist')
    }
  },
  {
    path: '*',
    components: {
      articles: () => import('~views/404')
    }
  }
]

Object.keys(articlesInfo).forEach((key) => {
  routes.splice(2, 0, {
    path: `/articles/${key.replace(/\.md$/, '')}`,
    components: {
      articles: () => import(`~articles/${key}`),
      articleContents: () => import('~views/ArticleContents')
    },
    meta: {
      name: key
    }
  })
})

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router
