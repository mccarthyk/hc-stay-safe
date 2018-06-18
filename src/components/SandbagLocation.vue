<template lang="html">
  <tr>
    <td width="1px">
      <a v-if="location.address" :href="`https://google.com/maps/search/${location.address}`" target="_blank" class="hide-external-indicator" :title="location.address">
        <span class="fa fa-fw fa-map-marker" aria-label="map"></span>
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
    dateToMoment (date) {
      return moment(date, 'MM/DD/YYYY hh:mm A')
    }
  },
  computed: {
    startTime () {
      return this.dateToMoment(this.location.starttime)
    },
    endTime () {
      return this.dateToMoment(this.location.endtime)
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
