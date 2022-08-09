<template>
  <HeaderSection />
  <ProjectsSection />
  <FormationSection />
  <ContactSection />
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "./sections/Header.vue";
import ProjectsSection from "./sections/Projects.vue";
import FormationSection from "./sections/Formation.vue";
import ContactSection from "./sections/Contact.vue";
import FooterSection from "./sections/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderSection,
    ProjectsSection,
    FormationSection,
    ContactSection,
    FooterSection,
  },
});
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
</style>
