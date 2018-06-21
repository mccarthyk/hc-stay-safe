<template lang="html">
  <div class="py-5 bg-white">
    <div class="container">
      <h2 class="text-center text-primary font-weight-bold font-serif" id="">
        Latest Updates
      </h2>

      <hr>

      <div class="row mt-4">
        <div class="col-lg-5 col-md-6 order-md-12">

          <!-- HCFL ALert -->
          <div is="HcflAlert">
            HCFL Alert is Hillsborough County’s official mass notification system. It is designed to keep you informed about emergencies and certain non-emergency events in Hillsborough County.
          </div>

        </div>
        <div class="col-lg-7 col-md-6">

          <!-- Latest Updates -->
          <ul class="list-unstyled">
            <li v-for="(link, index) in links" :key="index" class="media mb-4">
              <a :href="link.data.attrs.href" :target="link.data.attrs.target">
                <span class="fas fa-bullhorn fa-2x mr-3"></span>
              </a>
              <div class="media-body">
                <a :href="link.data.attrs.href" :target="link.data.attrs.target" class="text-dark">
                  <h5 class="mt-0 mb-1 font-serif font-weight-bold">
                    {{ link.data.attrs.title }}
                  </h5>
                </a>
                <div is="UpdateLink" :link="link"></div>
              </div>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HcflAlert from './HcflAlert'

export default {
  components: {
    HcflAlert,
    UpdateLink: {
      functional: true,
      props: ['link'],
      render: function (createElement, context) {
        return createElement('div', context.data, context.props.link.children)
      }
    }
  },
  computed: {
    links () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag === 'a' && x.data && x.data.attrs.title && x.children) : []
    }
  }
}
</script>
