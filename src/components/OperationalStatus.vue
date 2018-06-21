<template lang="html">
  <div class="list-group list-group-flush text-center mt-4">

    <div class="list-group-item py-2 d-flex justify-content-center align-items-center">
      <div class="px-3 w-50 text-right">
        Active Storm(s)
      </div>
      <strong class="px-3 w-50 text-left font-weight-bold">
        {{ storms }}
      </strong>
    </div>

    <div class="list-group-item py-2 d-flex justify-content-center align-items-center">
      <div class="px-3 w-50 text-right">
        Evacuation Level(s)
      </div>
      <strong class="px-3 w-50 text-left font-weight-bold">
        {{ evacLevels }}
      </strong>
    </div>

    <div class="list-group-item py-2 d-flex justify-content-center align-items-center">
      <div class="px-3 w-50 text-right">
        EOC Status
      </div>
      <strong class="px-3 w-50 text-left font-weight-bold">
        {{ eocStatus }}
      </strong>
    </div>

  </div>
</template>

<script>
export default {
  name: 'OperationalStatus',
  props: {
    title: {
      type: String,
      default: 'Operational Status'
    },
    storms: {
      type: String,
      default: 'None'
    },
    evacLevels: {
      type: String,
      default: 'None at this time'
    },
    eocStatus: {
      type: String,
      default: 'Monitoring'
    }
  }
}
</script>
