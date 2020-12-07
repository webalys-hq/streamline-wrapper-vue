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
// To use a Streamline icon first import a category you want from a family you have access to, eg:
import { Home } from "@streamlinehq/streamline-light/lib/interface-essential"
// And then take the icon of your choice from that category, eg with `Home.House`.

export default {
  name: 'HelloWorld',
  data() {
    return {
      icon: Home.House
    }
  },
  components: {StreamlineIcon}
}
</script>
``` 
