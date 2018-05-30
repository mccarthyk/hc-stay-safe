<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <div is="Sandbags"/>

    <div class="card card-body bg-dark">
      <details class="text-light" open>
        <pre class="text-light">{{ $store.state }}</pre>
      </details>
    </div>

  </div>
</template>

<script>
import Sandbags from './components/Sandbags'

export default {
  name: 'app',
  components: { Sandbags },
  data () {
    return {
      msg: 'Stay Safe'
    }
  }
}
</script>
