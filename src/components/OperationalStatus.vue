<template lang="html">
  <div class="card mb-3 mb-md-5">

    <div class="card-header text-center" :class="headerClass">
      <strong>{{ title }}</strong>
    </div>

    <table class="table table-striped mb-0">
      <tbody>
        <tr>
          <th class="text-right">Active Storm(s)</th>
          <td>
            <slot name="activeStorms"></slot>
          </td>
        </tr>
        <tr>
          <th class="text-right">Evacuation Level(s)</th>
          <td>
            <slot name="evacuationLevels"></slot>
          </td>
        </tr>
        <tr>
          <th class="text-right">EOC Status</th>
          <td>
            <slot name="eocStatus"></slot>
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
    }
  }
}
</script>
