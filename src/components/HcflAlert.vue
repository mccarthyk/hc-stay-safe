<template lang="html">
  <div class="card mb-3 mb-md-5 card-body bg-white">

    <div class="row align-items-center">
      <div class="col-md-3 text-center">
        <img src="http://hcflgov.net/library/hillsborough/promotions/hcflalerttight.png" class="img-fluid mx-auto mb-3 img-responsive center-block">
      </div>
      <div class="col-md-9">

        <div class="d-none d-md-block">
          <slot></slot>
        </div>

        <div class="row hide-external-indicator">
          <div class="col-sm-6">
            <p class="">
              <a href="https://member.everbridge.net/index/1332612387832180?#/signup" target="_blank" class="btn btn-primary btn-block">Create Profile</a>
            </p>
          </div>
          <div class="col-sm-6">
            <p class="mb-0">
              <a href="https://member.everbridge.net/index/1332612387832180?#/login" target="_blank" class="btn btn-info btn-block">Edit Profile</a>
            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HCFLAlert'
}
</script>
