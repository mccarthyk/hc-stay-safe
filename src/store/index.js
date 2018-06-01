import Vue from 'vue'
import Vuex from 'vuex'

import sandbags from './modules/sandbags'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sandbags
  }
})

// export const storeMixin = {}
