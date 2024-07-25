<template>
  <section class="Wrapper" id="home">
    <div class="H-Container">
      <NavbarComponent />
      <div class="H-Body">
        <div class="H-Info">
          <img src="../assets/logo.svg" alt="Logo Murilo Pereira" />
          <p v-html="content.content.header.description"></p>
          <a href="#contato" class="H-CTA">
            <svg-icon :path="path" type="mdi" />
            <a><p v-html="content.content.header.cta"></p></a>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../components/Navbar.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLightbulbOnOutline } from "@mdi/js";
import { content } from "@/store";

export default defineComponent({
  name: "HeaderSection",
  components: {
    SvgIcon,
    NavbarComponent,
  },
  data() {
    return {
      content,
      path: mdiLightbulbOnOutline,
    };
  },
});
</script>

<style lang="sass" scoped>
.Wrapper
  background-color: $bg-light
</style>
<style lang="sass">
.H-Container
  margin: 0 auto
  .H-Info
    > p
      color: $primary
      font-weight: 300
      text-align: left
      margin: 2em 0
      text-align: center
      padding: 28px 28px 68px
      font-size: 1.3rem
      span
        font-weight: bold
    img
      display: none
    .H-CTA
      display: flex
      align-items: center
      justify-content: center
      transform: translateY(50%)
      background-color: $cta-background
      color: $text-primary
      padding: 8px 0 8px 0
      border-top-right-radius: 50px
      border-bottom-right-radius: 50px
      border-top-left-radius: 15px
      border-bottom-left-radius: 50px
      color: $primary
      margin: 0 48px
      text-decoration: none
      cursor: pointer
      a
        width: 50%
        p
          text-align: center
          font-weight: bold
          font-size: 0.9em
          padding: 0
          padding-right: 16px
      svg
        margin-right: 12px
        width: 42px
        height: 42px

@media only screen and (min-width: 668px)
  .H-Container
    display: flex
    flex-direction: column
    .H-Body
      display: flex
      align-items: center
      justify-content: center
      padding: 0 3rem
      .H-Info
        display: flex
        flex-direction: column
        align-items: center
        position: relative
        > p
          padding: 0 10em
          font-size: .9rem
          padding: 46px 68px
        img
          display: initial
          position: relative
          width: 20rem
      .H-CTA
        transform: translateY(50%)
        padding: 8px 0 8px 0
        a
          width: 50%
          p
            text-align: center
            font-size: 1.2em
            padding: 0
            padding-right: 16px
        svg
          margin-right: 12px
          width: 56px
          height: 56px


@media only screen and (min-width: 912px)
  .H-Container
    .H-Body
      padding: 0 5rem
      .H-Info
        > p
          font-size: 1rem
        img
          width: 25rem

@media only screen and (min-width: 1024px)
  .H-Container
    .H-Body
      padding: 0 10rem
      .H-Info
        > p
          padding: 0 6em
          font-size: 1.4rem
        img
          width: 420px
@media only screen and (min-width: 1360px)
  .H-Container
    .H-Body
      padding: 0 20.5rem
@media only screen and (min-width: 1920px)
  .H-Container
    max-width: 1920px
    .H-Body
      padding: 0 25%
      .H-Info
        img
          width: 540px
@media only screen and (min-width: 2000px)
  .H-Container
    .H-Body
      padding-bottom: 40px
      .H-Info
        img
          margin-left: -22.5%
</style>
