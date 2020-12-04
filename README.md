# Vue 2 wrapper for Streamline icons and illustrations

This is a small Vue library which allows you to render Streamline SVG icons and illustrations.

Note that it only supports Vue 2. Pull requests for Vue 3 support are welcome!

## How to install

1. `yarn add @streamlinehq/streamline-wrapper-vue`

## How to use

Check `docs/example-vue-app` project created with CRA to see it in use.

```
<template>
<streamline-icon :icon="icon"></streamline-icon>
</template>

<script>
import {StreamlineIcon} from "@streamlinehq/streamline-wrapper-vue"
// Imported as Streamline's Icon type. Check source for more details
import HouseIcon from '@/icon'

export default {
  name: 'HelloWorld',
  data() {
    return {
      icon: HouseIcon
    }
  },
  components: {StreamlineIcon}
}
</script>
``` 
