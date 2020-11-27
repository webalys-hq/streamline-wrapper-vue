<template>
  <main>
    <h1>
      Streamline icons Vue example
    </h1>
    <section>
      <figure>
        <figcaption>First set the icon in your parent component</figcaption>
        <code>public icon = HouseIcon;</code>
        <figcaption>Then in your template add the icon using a tag streamline-icon</figcaption>
      </figure>
      <figure>
        <figcaption>Required props</figcaption>
        <code>:icon="icon" </code>
        <streamline-icon :icon="icon"></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          To spin once
        </figcaption>
        <code>:icon="icon" v-bind:spin="true" </code>
        <streamline-icon :icon="icon" v-bind:spin="true"></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          Infinite spin
        </figcaption>
        <code>:icon="icon" v-bind:spin="true" v-bind:infinite="true" </code>
        <streamline-icon :icon="icon" v-bind:spin="true" v-bind:infinite="true"></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          Fast infinite spin
        </figcaption>
        <code>:icon="icon" v-bind:spin="true" v-bind:infinite="true" v-bind:fast="true" </code>
        <streamline-icon :icon="icon" v-bind:spin="true" v-bind:infinite="true" v-bind:fast="true"></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          Fast infinite spin with different speed
        </figcaption>
        <code>:icon="icon" v-bind:spin="true" v-bind:infinite="true" v-bind:fast="true" v-bind:easeInOut="true" </code>
        <streamline-icon :icon="icon" v-bind:spin="true" v-bind:infinite="true" v-bind:fast="true" v-bind:easeInOut="true"></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          Custom size
        </figcaption>
        <code>:icon="icon" :size=48 </code>
        <streamline-icon :icon="icon" :size=48></streamline-icon>
      </figure>
      <figure>
        <figcaption>
          Custom width and height
        </figcaption>
        <code>:icon="icon" :width=64 :height=32 </code>
        <streamline-icon :icon="icon" :width=64 :height=32></streamline-icon>
      </figure>
    </section>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import StreamlineIcon from "../../../../src/components/StreamlineIcon.vue";
import HouseIcon from "@/icon";

@Options({
  data() {
    return {
      icon: HouseIcon
    }
  },
  components: {StreamlineIcon}
})
export default class HelloWorld extends Vue {

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
