<template>
  <!-- v-bind="options" -->
  <path
      v-bind="options"
      :d="path"
      :key="Math.random().toString()"
  />
</template>

<script lang="ts">
// eslint-disable-next-line no-unused-vars
import { defineComponent, PropType } from 'vue'
// eslint-disable-next-line no-unused-vars
import {Icon, iconOptions} from "@/components/StreamlineIcon.vue";

export default defineComponent({
  props: {
    icon: {
      type:  Object as PropType<Icon>,
      required: true
    },
    index: {
      type: Number,
      required: true
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
    options (): iconOptions {
      const {stroke, icon, index, fill} = this;

      return {
        stroke: stroke || icon[3][index].stroke,
        fill: fill || icon[3][index].fill,
        'stroke-linecap': icon[3][index]['stroke-linecap'],
        'stroke-linejoin': icon[3][index]['stroke-linejoin'],
        'stroke-width': icon[3][index]['stroke-width'],
      }
    }
  }
})
</script>
