<template>
  <div class="experiece-container">
    <p class="experience-company">{{ company }}</p>
    <p class="experience-role">{{ role }}</p>
    <p class="experience-description">{{ description }}</p>
    <p class="experience-interval">{{ interval }}</p>
    <div class="experience-techs">
      <TechComponent
        :light="true"
        v-for="tech in techs"
        :key="tech"
        :title="tech"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import TechComponent from "./Tech.vue";

export default defineComponent({
  name: "ExperienceComponent",
  components: { TechComponent },
  props: {
    company: String,
    role: String,
    description: String,
    interval: String,
    techs: Array as PropType<string[]>,
  },
});
</script>
<style lang="sass" scoped>
.experiece-container
  padding: 20px
  background-color: $bg-experience
  border-radius: 4px
  width: 250px
  height: 200px
  display: flex
  flex-direction: column
  .experience-company
    color: $text-secondary
    text-transform: uppercase
    font-weight: bold
    font-family: 'Bebas Neue', cursive
    font-size: 1.75rem
    letter-spacing: 2.5px
    text-align: left
    margin-bottom: .5rem
  .experience-role, .experience-interval
    color: $primary
    text-align: left
    text-transform: uppercase
    font-weight: 500
    font-size: .75rem
  .experience-description
    text-align: left
    color: $primary
    font-weight: 300
    font-size: .95rem
    margin: .25rem 0 .25rem 0
  .experience-techs
    display: flex
    gap: 8px
    flex-wrap: wrap
    margin-top: 20px

@media only screen and (min-width: 1360px)
  .experiece-container
    margin: 0 auto
@media only screen and (min-width: 1920px)
  .experiece-container
    width: 350px
</style>
