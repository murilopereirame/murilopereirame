<template>
  <div class="H-Container">
    <NavbarComponent />
    <ProfilePicture />
    <p>
      Realizo projetos e serviços relacionados a
      <span>Back-End e Front-End.</span> Participo de todas as fases de um
      projeto com muita dedicação. Garanto a usabilidade e execução por meio das
      linguagens de programação.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../components/Navbar.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";

export default defineComponent({
  name: "HeaderSection",
  components: {
    NavbarComponent,
    ProfilePicture,
  },
});
</script>

<style lang="sass" scoped>
.H-Container
  background-color: $bg-light
  p
    color: $primary
    font-weight: 300
    text-align: left
    margin: 0
    padding: 40px 35px 68px
    font-size: 1.1rem
    span
      font-weight: bold
</style>
