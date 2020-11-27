<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <streamline-icon :icon="icon"/>
  </div>
</template>

<script>
import HouseIcon from '../icon'
import StreamlineIcon from './StreamlineIcon'

export default {
  name: 'HelloWorld',
  data() {
    return {
      icon: HouseIcon
    }
  },
  components: {
    StreamlineIcon
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
