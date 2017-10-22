import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: true,
  state: {
    header: {
      isShow: true,
    }
  },
  mutations: {
    /**
     * 切换header显示
     */
    toggleHeader() {
      this.state.header.isShow = !this.state.header.isShow
      debug && console.log('header.isShow: ' + this.state.header.isShow)
    }
  },
  actions: {

  }
})
