<template>
  <LoadingOverlay v-if="!content.loaded" />
  <HeaderSection v-if="content.loaded" />
  <ProjectsSection v-if="content.loaded" />
  <FormationSection v-if="content.loaded" />
  <ContactSection v-if="content.loaded" />
  <FooterSection v-if="content.loaded" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderSection from "./sections/Header.vue";
import ProjectsSection from "./sections/Projects.vue";
import FormationSection from "./sections/Formation.vue";
import ContactSection from "./sections/Contact.vue";
import FooterSection from "./sections/Footer.vue";
import LoadingOverlay from "./sections/LoadingOverlay.vue";
import axios from "axios";
import { analytics, content } from "./store";
import "vue-toastification/dist/index.css";

export default defineComponent({
  name: "App",
  methods: {
    loadPageContent: async () => {
      const contentResponse = await axios.get(
        "https://api.murilopereira.dev.br/api/v1/content"
      );

      content.setContent(contentResponse.data.data);
    },
    loadFormations: async () => {
      const formationsResponse = await axios.get(
        "https://api.murilopereira.dev.br/api/v1/formations"
      );

      content.setFormations(
        formationsResponse.data.data.map((elem) => {
          return {
            ...elem,
            start_date: new Date(elem.start_date.date),
            end_date: new Date(elem.end_date.date),
          };
        })
      );
    },
    loadProjects: async () => {
      const projectsResponse = await axios.get(
        "https://api.murilopereira.dev.br/api/v1/projects"
      );
      content.setProjects(projectsResponse.data.data);
    },
    loadExperiences: async () => {
      const experiencesResponse = await axios.get(
        "https://api.murilopereira.dev.br/api/v1/experiences"
      );

      content.setExperiences(
        experiencesResponse.data.data.reverse().map((elem) => {
          return {
            ...elem,
            start_date: new Date(elem.start_date.date),
            ...(elem.end_date
              ? {
                  end_date: new Date(elem.end_date.date),
                }
              : {}),
          };
        })
      );
    },
  },
  beforeMount() {
    analytics.logScreenView("Home");
    Promise.all([
      this.loadPageContent(),
      this.loadFormations(),
      this.loadProjects(),
      this.loadExperiences(),
    ]).then(() => {
      content.setContentLoaded();
    });
  },
  data() {
    return {
      content,
    };
  },
  components: {
    HeaderSection,
    ProjectsSection,
    FormationSection,
    ContactSection,
    FooterSection,
    LoadingOverlay,
  },
});
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  scroll-behavior: smooth
#app
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
.Wrapper
  width: 100%
</style>
