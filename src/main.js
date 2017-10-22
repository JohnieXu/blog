// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './router/index'
import ElementUI from 'element-ui'
// import skins from './common/skins.js'
import 'element-ui/lib/theme-default/index.css'
// import './common/common.scss'
// normalize.css

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
