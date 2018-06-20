<template lang="html">
  <tr>
    <td class="mapColumn">
      <a v-if="location.address" :href="`https://google.com/maps/search/${location.address}`" target="_blank" class="hide-external-indicator" :title="location.address">
        <span class="fa fa-fw fa-map-marker" aria-label="View Map"></span>
      </a>
    </td>
    <td>
      <a v-if="location.link" :href="location.link" target="_blank" class="hide-external-indicator">
        {{ location.location }}
      </a>
      <template v-else>
        {{ location.location }}
      </template>
    </td>
    <td>{{ range }}</td>
    <td>{{ location.info }}</td>
  </tr>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SandbagLocation',
  props: ['location'],
  methods: {
    getStartTime (x) {
      return moment(`${x.startdate} ${x.starttime}`, 'YYYY-MM-DD hh:mm')
    },
    getEndTime (x) {
      return moment(`${x.enddate} ${x.endtime}`, 'YYYY-MM-DD hh:mm')
    }
  },
  computed: {
    startTime () {
      return this.getStartTime(this.location)
    },
    endTime () {
      return this.getEndTime(this.location)
    },
    range () {
      if (this.startTime.isSame(this.endTime, 'day')) {
        return `${this.startTime.format('lll')} - ${this.endTime.format('LT')}`
      } else {
        return `${this.startTime.format('lll')} - ${this.endTime.format('lll')}`
      }
    }
  }
}
</script>

<style scoped>
.mapColumn {
  width: 1px;
}
</style>
