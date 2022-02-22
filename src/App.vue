<template>
  <Header />
  <Portifolio />
  <Experience />
  <Contact />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./sections/Header.vue";
import Portifolio from "./sections/Portifolio.vue";
import Experience from "./sections/Experience.vue";
import Contact from "./sections/Contact.vue";

@Options({
  components: {
    Header,
    Portifolio,
    Experience,
    Contact,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f4068;
}

body {
  background-color: #ebecf1;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
