<template lang="html">
  <div class="card mb-3 mb-md-5">

    <div class="card-header text-center" :class="headerClass">
      <strong>{{ title }}</strong>
    </div>

    <div v-if="links.length" class="list-group list-group-flush text-center mb-0">
      <ListGroupItem v-for="(link, index) in links" :key="index" :link="link" class="list-group-item py-2"/>
    </div>

    <div v-else class="card-body lead text-center text-muted">
      Nothing at this time.
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardListGroup',
  props: {
    title: {
      type: String,
      required: true
    },
    headerClass: {
      type: String,
      default: ''
    }
  },
  components: {
    ListGroupItem: {
      functional: true,
      props: ['link'],
      render: function (createElement, context) {
        context.props.link.data.staticClass = [context.data.staticClass, context.props.link.data.staticClass].join(' ')
        return createElement('a', Object.assign(context.data, context.props.link.data), context.props.link.children)
      }
    }
  },
  computed: {
    links () {
      return (this.$slots.default) ? this.$slots.default.filter(x => x.tag === 'a' && x.data && x.children) : []
    }
  }
}
</script>
