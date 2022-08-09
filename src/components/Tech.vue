<template>
  <div
    class="T-Container"
    :class="{
      'tech-light': light,
    }"
  >
    <p>{{ title }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TechComponent",
  props: {
    title: String,
    light: Boolean,
  },
});
</script>
<style lang="sass" scoped>
.T-Container
  background-color: $bg-darkest
  padding: .25rem .25rem
  border-radius: 2.5px
  p
    font-weight: 300
    color: $text-primary
    font-size: .75rem
    text-transform: uppercase

.tech-light
  background-color: $bg-alternative
  p
    color: $primary
    font-weight: 500
</style>
