<template>
  <span
      class="Streamline_Icon"
      :class="{
      'Streamline_Icon_Spin': spin,
      'Streamline_Icon_Pulse': pulse,
      'Streamline_Animation_Infinite': infinite,
      'Streamline_Icon_Fast': fast,
      'Streamline_Icon_EaseInOut': easeInOut,
      'Streamline_Icon_Animated': spin || pulse
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
  </span>
</template>

<script>
import IconPath from './IconPath'
export default {
  components: {
    IconPath
  },
  props: {
    icon: {
      type: [String, Number, Array, Object]
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
    pulse: {
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
      const { icon, size } = this
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
        if (this.height && parseInt(this.height) !== sizeObject.height) {
          sizeObject.height = this.height
          sizeObject.isDefault = false
        }
        if (this.width && parseInt(this.width) !== sizeObject.width) {
          sizeObject.width = this.width
          sizeObject.isDefault = false
        }
      }
      return sizeObject
    }
  }
}
</script>

<style>
.Streamline_Icon {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.Streamline_Icon_Animated {
  animation-duration: 1s;
  animation-fill-mode: both;
  transform-origin: center;
  animation-timing-function: linear;
}
.Streamline_Icon_Spin {
  animation-name: rotate;
  animation-duration: 2s;
}
.Streamline_Animation_Infinite {
  animation-iteration-count: infinite;
}
.Streamline_Animation_Fast {
  animation-duration: 1s;
}
.Streamline_Animation_EaseInOut {
  animation-timing-function: ease-in-out;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
