<template lang="html">
  <div class="card mb-3 mb-md-5">

    <div class="card-header px-3 d-flex align-items-center justify-content-between" :class="headerClass">
      <strong>
        {{ title }}
      </strong>
      <div class="text-muted text-right small" v-if="updated">
        Last Modified: {{ lastModified.format('lll') }}
      </div>
    </div>

    <table v-if="sandbagLocations.length" :summary="sandbagLocations" class="table table-striped mb-0">
      <thead>
        <tr>
          <th colspan="2">Location</th>
          <th>Status</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="location in sandbagLocations" is="SandbagLocation" :location="location" />
      </tbody>
    </table>

    <div v-else class="card-body text-center">
      <p class="card-text text-muted lead">
        There are no locations currently offering sandbags.
      </p>
    </div>

  </div>
</template>

<script>
import GoogleSheetModel from 'google-sheet-model'
import SandbagLocation from './SandbagLocation'
import moment from 'moment'

export default {
  name: 'Sandbags',
  extends: GoogleSheetModel,
  components: { SandbagLocation },
  props: {
    title: {
      type: String,
      default: 'Sandbag Locations'
    },
    headerClass: {
      type: String,
      default: ''
    },
    // google sheet model props
    sheetId: {
      default: '14c7p2JUfuRTC9JcbvG--pOu6IRtVuMZ7Flkv0EZ54Io'
    },
    tableId: {
      default: 1
    },
    fields: {
      default: () => ['location', 'address', 'link', 'startdate', 'starttime', 'enddate', 'endtime', 'info']
    }
  },
  computed: {
    sandbagLocations () {
      return this.instances.filter(x => SandbagLocation.methods.getEndTime(x).isAfter())
    },
    lastModified () {
      return moment(this.updated)
    },
    tableSummary () {
      return 'Locations and scheduling of sandbag distributions.'
    }
  }
}
</script>
