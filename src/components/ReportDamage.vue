<template lang="html">
  <div class="py-5 bg-white">
    <div class="container">

      <h2 class="text-center text-primary font-weight-bold font-serif" id="">
        {{ title }}
      </h2>

      <hr>

      <div class="row justify-content-center align-items-center">
        <div v-for="(link, index) in links" :key="index" class="col-md-6 col-lg-4 mb-4">
          <a :href="link.data.attrs.href" :target="link.data.attrs.target" class="card list-group-item-action h-100">
            <div class="row h-100 no-gutters align-items-center text-secondary">
              <div class="col-3 align-self-stretch py-4 bg-light text-secondary text-center">
                <span :class="link.data.attrs.icon" class="fa-2x"></span>
              </div>
              <div class="col-9 p-3">
                <p class="h6 m-0">
                  <span is="DamageLinkText" :link="link"></span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Report Damage'
    }
  },
  components: {
    DamageLinkText: {
      functional: true,
      props: ['link'],
      render: function (createElement, context) {
        return createElement('span', context.data, context.props.link.children)
      }
    }
  },
  computed: {
    links () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag === 'a' && x.data && x.data.attrs.icon && x.children) : []
    }
  }
}
</script>
