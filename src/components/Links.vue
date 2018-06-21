<template lang="html">
  <div class="py-5">
    <div class="container">
      <h2 class="text-center text-secondary font-weight-bold font-serif">
        Links &amp; Information
      </h2>

      <hr>

      <div class="row justify-content-center">
        <div v-for="section in sections" is="LinkSection" :section="section" class="col-lg-4 col-md-6">
          <h5 class="text-center font-serif">
            {{ section.data.attrs.title }}
          </h5>

          <ul class="nav flex-column small mb-4">
            <li v-for="link in links(section)" class="nav-item">
              <a is="LinkSectionLink" :link="link" class="nav-link"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    LinkSection: {
      functional: true,
      props: ['section'],
      render: function (createElement, context) {
        return createElement('div', context.data, context.children)
      }
    },
    LinkSectionLink: {
      functional: true,
      props: ['link'],
      render: function (createElement, context) {
        return createElement('a', Object.assign(context.data, context.props.link.data), context.props.link.children)
      }
    }
  },
  computed: {
    sections () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag === 'div' && x.data && x.data.attrs.title && x.children) : []
    }
  },
  methods: {
    links (section) {
      return (section.children) ? section.children.filter(x => x.tag === 'a' && x.data && x.children) : []
    }
  }
}
</script>
