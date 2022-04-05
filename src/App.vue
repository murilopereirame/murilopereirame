<template>
  <Header />
  <Portifolio />
  <Experience />
  <Contact />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getAnalytics, logEvent } from "firebase/analytics";
import Header from "./sections/Header.vue";
import Portifolio from "./sections/Portifolio.vue";
import Experience from "./sections/Experience.vue";
import Contact from "./sections/Contact.vue";
import Footer from "./sections/Footer.vue";

@Options({
  components: {
    Header,
    Portifolio,
    Experience,
    Contact,
    Footer,
  },
  beforeMount() {
    const analytics = getAnalytics();
    logEvent(analytics, "home_view");
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f4068;
  height: 100%;
}

body {
  background-color: #ebecf1;
  margin: 0;
  width: 100%;
  height: 100%;
}

html {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}

.agile__actions {
  display: none;
}
</style>
