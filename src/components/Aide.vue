<template lang="html">
  <div class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center text-secondary font-weight-bold font-serif" id="">
        Shelters &amp; Distribution Points
      </h2>

      <hr>

      <div v-show="showLocations">
        <!-- Sandbag Locations -->
        <div is="Locations" title="Sandbag Locations" :table-id="1" @hasLocations="showLocations = true">
          Locations and scheduling of sandbag distributions.
        </div>

        <!-- Evacuation Shelters -->
        <div is="Locations" title="Evacuation Shelters" :table-id="2" @hasLocations="showLocations = true">
          Locations and scheduling of Evacuation Shelters.
        </div>

        <!-- Cold Weeather Shelters -->
        <div is="Locations" title="Cold Weather Shelters" :table-id="3" @hasLocations="showLocations = true">
          Locations and scheduling of Cold Weeather Shelters.
        </div>
      </div>

      <div v-if="!showLocations" class="text-center text-muted lead py-5">
        There are no Shelters or Distribution Points available at this time.
      </div>

    </div>
  </div>
</template>

<script>
import Locations from './Locations'

export default {
  components: { Locations },
  data () {
    return {
      showLocations: false
    }
  }
}
</script>
