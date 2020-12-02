<template>
  <i
      class="Streamline_Icon"
      :class="{
      'Streamline_Icon--spin': spin,
      'Streamline_Icon--infinite': infinite,
      'Streamline_Icon--animated': spin,
      'Streamline_Animation--fast': fast,
      'Streamline_Animation--ease_in_out': easeInOut,
    }"
  >
    <svg
        :viewBox="`0 0 ${computedSize.width} ${computedSize.height}`"
        :style="`width: ${computedSize.width}; height: ${computedSize.height}`"
        :width="computedSize.width"
        :height="computedSize.height"
    >
      <g
          v-if="!computedSize.isDefault"
          :transform="`scale(${computedSize.width / icon[1]},${computedSize.height / icon[2]})`"
      >
        <icon-path
            v-for="(path, index) in icon[4]"
            :icon="icon"
            :path="path"
            :index="index"
            :stroke="stroke"
            :fill="fill"
            :key="index"
        />
      </g>
      <svg v-else>
        <icon-path
            v-for="(path, index) in icon[4]"
            :icon="icon"
            :path="path"
            :index="index"
            :stroke="stroke"
            :fill="fill"
            :key="index"
        />
      </svg>
    </svg>
  </i>
</template>

<script>
import Vue from 'vue';
import IconPath from "./IconPath.vue";

export default Vue.extend({
  name: 'StreamlineIcon',
  components: {
    IconPath
  },
  props: {
    icon: {
      type: Array,
      required: true
    },
    fill: {
      type: String
    },
    stroke: {
      type: String
    },
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    spin: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Boolean,
      default: false
    },
    fast: {
      type: Boolean,
      default: false
    },
    easeInOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedSize () {
      const { icon, size, height, width } = this

      const sizeObject = {
        width: icon[1],
        height: icon[2],
        isDefault: true
      }
      if (size !== 24) {
        sizeObject.isDefault = (size === sizeObject.width)
        sizeObject.height = size
        sizeObject.width = size
      } else {
        if (height && height !== sizeObject.height) {
          sizeObject.height = height
          sizeObject.isDefault = false
        }
        if (width && width !== sizeObject.width) {
          sizeObject.width = width
          sizeObject.isDefault = false
        }
      }
      return sizeObject
    }
  }
})
</script>

<style>
.Streamline_Icon {
  display: inline-block;
}
.Streamline_Icon--animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  transform-origin: center;
  animation-timing-function: linear;
}
.Streamline_Icon--spin {
  animation-name: rotate;
  animation-duration: 2s;
}
.Streamline_Icon--infinite {
  animation-iteration-count: infinite;
}
.Streamline_Animation--fast {
  animation-duration: 1s;
}
.Streamline_Animation--ease_in_out {
  animation-timing-function: ease-in-out;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
