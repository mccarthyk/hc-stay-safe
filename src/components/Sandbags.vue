<template lang="html">
  <div class="card mb-3 mb-md-5">

    <div class="card-header px-3 d-flex align-items-center justify-content-between" :class="headerClass">
      <strong>
        {{ title }}
      </strong>
      <div class="text-muted text-right small" v-if="sandbagsModifiedDate">
        Last Modified: {{ sandbagsModifiedDate.format('lll') }}
      </div>
    </div>

    <table v-if="activeSandbagLocations.length" class="table table-striped mb-0">
      <thead>
        <tr>
          <th colspan="2">Location</th>
          <th>Status</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sandbag in activeSandbagLocations">
          <td width="1px">
            <a v-if="sandbag.address" :href="`https://google.com/maps/search/${sandbag.address}`" target="_blank" class="hide-external-indicator" :title="sandbag.address">
              <span class="fa fa-fw fa-map-marker" aria-label="map"></span>
            </a>
          </td>
          <td>
            <a v-if="sandbag.link" :href="sandbag.link" target="_blank" class="hide-external-indicator">
              {{ sandbag.location }}
            </a>
            <template v-else>
              {{ sandbag.location }}
            </template>
          </td>
          <td>{{ sandbag.range }}</td>
          <td>{{ sandbag.info }}</td>
        </tr>
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
import { sandbagsMixin } from '../store/modules/sandbags'

export default {
  name: 'Sandbags',
  mixins: [sandbagsMixin],
  props: {
    title: {
      type: String,
      default: 'Sandbag Locations'
    },
    headerClass: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.fetchSandbags()
  }
}
</script>
