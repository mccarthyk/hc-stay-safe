<template lang="html">
  <div v-if="locations.length" class="card mb-3 mb-md-5">

    <div class="card-header px-3 d-flex align-items-center justify-content-between" :class="headerClass">
      <strong class="font-serif">
        {{ title }}
      </strong>
      <div class="text-light text-right small" v-if="updated">
        Last Modified: {{ lastModified.format('lll') }}
      </div>
    </div>

    <table class="table table-striped mb-0" :aria-label="title">
      <caption class="sr-only">
        <slot></slot>
      </caption>
      <thead>
        <tr>
          <th colspan="2">Location</th>
          <th>Status</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in locations" is="Location" :location="location" />
      </tbody>
    </table>

  </div>
</template>

<script>
import GoogleSheetModel from 'google-sheet-model'
import Location from './Location'
import moment from 'moment'

export default {
  name: 'Locations',
  extends: GoogleSheetModel,
  components: { Location },
  props: {
    title: {
      type: String,
      default: 'Locations'
    },
    headerClass: {
      type: String,
      default: 'bg-secondary text-white'
    },
    // google sheet model props
    sheetId: {
      default: '14c7p2JUfuRTC9JcbvG--pOu6IRtVuMZ7Flkv0EZ54Io'
    },
    fields: {
      default: () => ['location', 'address', 'link', 'startdate', 'starttime', 'enddate', 'endtime', 'info']
    }
  },
  computed: {
    locations () {
      return this.instances.filter(x => Location.methods.getEndTime(x).isAfter())
    },
    lastModified () {
      return moment(this.updated)
    }
  },
  updated () {
    if (this.locations.length) {
      this.$emit('hasLocations')
    }
  }
}
</script>
