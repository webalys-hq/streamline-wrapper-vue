<template>
  <!-- v-bind="options" -->
  <path v-bind="options" :d="path" :key="Math.random().toString()" />
</template>

<script>
export default {
  name: "IconPath",
  props: {
    icon: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
    },
    stroke: {
      type: String,
    },
    fill: {
      type: String,
    },
  },
  computed: {
    options() {
      const { stroke, icon, index, fill } = this;

      return {
        stroke: stroke || icon[3][index].stroke,
        fill: fill || icon[3][index].fill,
        "stroke-linecap": icon[3][index]["stroke-linecap"],
        "stroke-linejoin": icon[3][index]["stroke-linejoin"],
        "stroke-width": icon[3][index]["stroke-width"],
        transform: icon[3][index]["transform"],
      };
    },
  },
};
</script>
