// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
// import skins from './common/skins.js'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import '~static/css/normalize.min.css'
// import './common/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

OfflinePluginRuntime.install()

// directive highlight.js
// Vue.directive('highlight',function (el) {
//   let blocks = el.querySelectorAll('pre code');
//   console.log(el.querySelectorAll('pre'))
//   blocks.forEach((i, block) => {
//     hljs.highlightBlock(block)
//   })
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
