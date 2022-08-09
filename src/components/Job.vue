<template>
  <div class="J-Container">
    <p class="job-type">{{ type }}</p>
    <p class="job-title">{{ title }}</p>
    <p class="job-year">{{ year }}</p>
    <div class="job-techs">
      <TechComponent v-for="tech in techs" :key="tech" :title="tech" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import TechComponent from "../components/Tech.vue";

export default defineComponent({
  name: "JobComponent",
  props: {
    type: String,
    title: String,
    year: String,
    techs: Array as PropType<string[]>,
  },
  components: {
    TechComponent,
  },
});
</script>
<style lang="sass" scoped>
.J-Container
  background-color: $bg-dark
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 10px 10px
  width: 160px
  height: 160px
  border-radius: 5px
  .job-techs
    display: grid
    justify-content: space-around
    grid-template-columns: 1fr 1fr
    grid-gap: .25rem
  .job-type
    font-size: 0.875rem
    color: $text-primary
    margin-bottom: .5rem
    text-transform: uppercase
  .job-title
    font-size:  1.75rem
    color: $text-primary
    font-family: 'Bebas Neue', cursive
    text-transform: uppercase
    line-height: 32px
    text-align: left
    margin-bottom: .5rem
  .job-year
    font-size: 0.875rem
    color: $secondary
    margin-bottom: 1rem
</style>
