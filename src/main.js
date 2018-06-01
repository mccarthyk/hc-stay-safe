import Vue from 'vue'

import HcflAlert from './components/HcflAlert'
import OperationalStatus from './components/OperationalStatus'
import CardListGroup from './components/CardListGroup'
import Sandbags from './components/Sandbags'

import store from './store'

export default Vue.extend({
  store,
  components: { HcflAlert, OperationalStatus, CardListGroup, Sandbags }
})
