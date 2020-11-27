# Vue wrapper for Streamline icons and illustrations

This is a small Vue library which allows you to render Streamline SVG icons and illustrations.

## How to install

1. `yarn add @streamlinehq/streamline-wrapper-vue`

## How to use

Check `docs/example-vue-app` project created with CRA to see it in use.

```
<template>
<streamline-icon :icon="icon"></streamline-icon>
</template>

<script lang="ts">
import StreamlineIcon from '@streamlinehq/streamline-wrapper-vue'
// Imported as Streamline's Icon type. Check source for more details
import HouseIcon from '@/icon'

@Options({
  data() {
    return {
      icon: HouseIcon
    }
  },
  components: {StreamlineIcon}
})
export default class HelloWorld extends Vue {
// your main component here
}
</script>
``` 
