<template>
  <div class="S-Container">
    <div class="skill-pre"></div>
    <div class="skill-info">
      <p class="skill-title">
        {{ title }}<span>{{ highlight }}</span>
      </p>
      <p class="skill-info">{{ info }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillComponent",
  props: {
    title: String,
    info: String,
    highlight: String,
  },
});
</script>

<style lang="sass" scoped>
.S-Container
  display: flex
  align-items: flex-start
  justify-content: flex-start
  width: 100%
  margin-bottom: 15px
  .skill-pre
    width: 15px
    height: 4px
    background-color: $secondary
    margin-right: 12px
    margin-top: 5px
  .skill-info
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    color: $text-primary
    width: 100%
    p
      margin: 0
    .skill-title
      text-align: left
      span
        font-weight: 900
        color: $text-alternative
      text-transform: uppercase
      font-size: .85rem
      min-width: 100%
    .skill-info
      text-align: left
      font-size: .75rem
      max-width: 60%
</style>
