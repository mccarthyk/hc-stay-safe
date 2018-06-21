<template lang="html">
  <div class="card card-body text-center mb-5">
    <a href="https://member.everbridge.net/index/1332612387832180?#/login" target="_blank" class="hide-external-indicator">
      <img src="https://hillsboroughcounty.org/library/hillsborough/promotions/hcflalerttight.png" alt="HCFL Alert Hillsborough County" class="img-fluid mb-3">
    </a>

    <div class="text-muted small">
      <slot></slot>
      <a href="https://member.everbridge.net/index/1332612387832180?#/signup" target="_blank" class="hide-external-indicator">
        {{ signUpText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HCFLAlert',
  props: {
    signUpText: {
      type: String,
      default: 'Sign Up Today!'
    }
  }
}
</script>
