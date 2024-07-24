<template>
  <section class="Wrapper" id="home">
    <div class="H-Container">
      <NavbarComponent />
      <div class="H-Body">
        <ProfilePicture />
        <div class="H-Info">
          <img src="../assets/logo.svg" alt="Logo Murilo Pereira" />
          <p v-html="content.content.header.description"></p>
          <div class="H-CTA">
            <svg-icon :path="path" type="mdi" />
            <a><p v-html="content.content.header.cta"></p></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarComponent from "../components/Navbar.vue";
import ProfilePicture from "@/components/ProfilePicture.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLightbulbOnOutline } from "@mdi/js";
import { content } from "@/store";

export default defineComponent({
  name: "HeaderSection",
  components: {
    SvgIcon,
    NavbarComponent,
    ProfilePicture,
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
      margin: 0
      padding: 40px 35px 68px
      font-size: 1.1rem
      span
        font-weight: bold
    img
      display: none
    .H-CTA
      display: none

@media only screen and (min-width: 668px)
  .H-Container
    display: flex
    flex-direction: column
    .H-Body
      display: flex
      align-items: center
      padding: 0 3rem
      margin-bottom: -12.25vh
      .H-Info
        display: flex
        flex-direction: column
        align-items: flex-start
        > p
          padding: 40px 0px 10px 30px
          font-size: .9rem
        img
          display: initial
          position: relative
          width: 20rem
          margin-left: -7.5vw
        .H-CTA
          display: flex
          align-items: center
          justify-content: flex-start
          padding: 20px 0px 15px 30px
          color: $text-primary
          p
            text-align: left
            span
              font-weight: bold
          svg
            margin-right: 15px
            width: 56px
            height: 56px

@media only screen and (min-width: 912px)
  .H-Container
    .H-Body
      padding: 0 5rem
      margin-bottom: -8vh
      .H-Info
        > p
          font-size: 1rem
        img
          width: 25rem
          margin-left: -7.5vw
        .H-CTA
          display: flex
          align-items: center
          justify-content: flex-start
          padding: 20px 0px 15px 30px
          color: $text-primary
          p
            text-align: left
            span
              font-weight: bold
          svg
            margin-right: 15px
            width: 56px
            height: 56px

@media only screen and (min-width: 1024px)
  .H-Container
    .H-Body
      padding: 0 10rem
      margin-bottom: -16vh
      .H-Info
        > p
          padding: 40px 0px 10px 30px
          font-size: 1rem
        img
          width: 420px
          margin-left: -8.5vw
        .H-CTA
          padding: 20px 0px 15px 30px
          p
            text-align: left
            span
              font-weight: bold
          svg
            margin-right: 15px
            width: 56px
            height: 56px
@media only screen and (min-width: 1360px)
  .H-Container
    .H-Body
      padding: 0 20.5rem
      margin-bottom: -15vh
      .H-Info
        img
          margin-left: -7vw
@media only screen and (min-width: 1920px)
  .H-Container
    max-width: 1920px
    .H-Body
      padding: 0 25%
      margin-bottom: -15vh
      .H-Info
        img
          margin-left: -6.25vw
          width: 540px
@media only screen and (min-width: 2000px)
  .H-Container
    .H-Body
      padding-bottom: 40px
      .H-Info
        img
          margin-left: -22.5%
</style>
