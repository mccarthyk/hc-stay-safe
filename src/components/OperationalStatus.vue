<template lang="html">
  <div class="card mb-3 mb-md-5">

    <div class="card-header text-center" :class="headerClass">
      <strong>{{ title }}</strong>
    </div>

    <table class="table table-striped mb-0">
      <caption class="sr-only">
        <p>
          The current active storms are: {{ storms }}
        </p>
        <p>
          The current evacuation levels are: {{ evacLevels }}
        </p>
        <p>
          The current EOC status is: {{ eocStatus }}
        </p>
      </caption>
      <tbody aria-hidden="true">
        <tr>
          <th class="text-right">Active Storm(s)</th>
          <td>
            {{ storms }}
          </td>
        </tr>
        <tr>
          <th class="text-right">Evacuation Level(s)</th>
          <td>
            {{ evacLevels }}
          </td>
        </tr>
        <tr>
          <th class="text-right">EOC Status</th>
          <td>
            {{ eocStatus }}
          </td>
        </tr>
      </tbody>
    </table>

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
    headerClass: {
      type: String,
      default: 'bg-primary text-white'
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
