// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
// import skins from './common/skins.js'
import 'element-ui/lib/theme-default/index.css'
import 'highlight.js/styles/monokai-sublime.css'
import 'font-awesome/css/font-awesome.min.css'
import '~static/css/normalize.min.css'
import './common/common.scss'
import './common/mixins.scss'
import './common/markdown.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

// OfflinePluginRuntime.install({
//   onUpdateReady () {
//     OfflinePlugin.applyUpdate()
//   },
//   onUpdated () {
//     console.log('updated')
//     window.location.reload()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
