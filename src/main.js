import Vue from 'vue'
import App from './App'
import Sandbags from './components/Sandbags'

import store from './store'

export default Vue.extend({
  store,
  extends: App
})

let sandbags = Vue.extend({
  store,
  extends: Sandbags
})

export { sandbags }
