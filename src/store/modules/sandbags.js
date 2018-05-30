import { mapState, mapActions, mapGetters } from 'vuex'
import moment from 'moment'
import Sandbag from '../models/sandbag'

export default {
  state: {
    index: [],
    modifiedDate: null
  },
  actions: {
    fetchSandbags ({ commit }) {
      fetch(Sandbag.url).then(res => res.json()).then(json => {
        commit('setSandbagsModifiedDate', moment(json.feed.updated.$t))
        if (json.feed.entry) {
          commit('setSandbags', json.feed.entry.map(x => new Sandbag(x)))
        }
      })
    }
  },
  mutations: {
    setSandbags (state, data) {
      state.index = data
    },
    setSandbagsModifiedDate (state, data) {
      state.modifiedDate = data
    }
  },
  getters: {
    activeSandbagLocations: state => state.index.filter(x => x.isActive)
  }
}

export const sandbagsMixin = {
  computed: {
    ...mapState({
      sandbagsModifiedDate: state => state.sandbags.modifiedDate
    }),
    ...mapGetters(['activeSandbagLocations'])
  },
  methods: mapActions(['fetchSandbags'])
}
