<template>
  <!-- v-bind="options" -->
  <path
      v-bind="options"
      :d="path"
      :key="Math.random().toString()"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Number, Array, Object]
    },
    index: {
      type: Number
    },
    path: {
      type: String
    },
    stroke: {
      type: String
    },
    fill: {
      type: String
    }
  },
  computed: {
    options () {
      const tempIcon = this.icon[3]
      const tempOptions = { ...tempIcon[this.index] }
      tempOptions.stroke = this.stroke || tempIcon[this.index].stroke
      tempOptions.fill = this.fill || tempIcon[this.index].fill
      return tempOptions
    }
  }
}
</script>
