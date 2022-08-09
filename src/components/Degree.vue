<template>
  <div class="degree-container">
    <div class="degree-icon">
      <svg-icon :path="icon" type="mdi" />
    </div>
    <div class="degree-info">
      <p class="degree-title">{{ title }}</p>
      <p class="degree">{{ degree }}</p>
      <p class="degree-institution">{{ institution }}</p>
      <p class="degree-interval">{{ interval }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SvgIcon from "@jamescoyle/vue-icon";

export default defineComponent({
  name: "DegreeComponent",
  components: { SvgIcon },
  props: {
    icon: String,
    title: String,
    degree: String,
    institution: String,
    interval: String,
  },
});
</script>
<style lang="sass" scoped>
.degree-container
  display: flex
  cursor: pointer
  align-items: flex-start
  justify-content: flex-start
  .degree-icon
    color: $secondary
    margin-right: 15px
    svg
      width: 2.25rem
      height: 2.25rem

  .degree-info
    display: flex
    flex-direction: column
    align-items: flex-start
    color: $text-alternative
    font-size: .75rem
    .degree-title
      text-transform: uppercase
      margin-bottom: .25rem
    .degree
      font-weight: bold
      font-size: .95rem
    .degree-institution
      text-transform: uppercase
    .degree-interval
</style>
