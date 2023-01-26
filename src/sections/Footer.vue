<template>
  <footer class="FT-Container">
    <img src="../assets/logo-branca.svg" alt="Logo Murilo Pereira" />
    <div class="separator-wrapper"><div class="vertical-separator"></div></div>
    <div class="contact-info">
      <a
        v-on:click="linkClick('email')"
        :href="`mailto:${content.content.footer.email}`"
      >
        {{ content.content.footer.email }}
      </a>
      <a
        v-on:click="linkClick('whatsapp')"
        rel="noopener"
        :href="`https://wa.me/${clearNumber(content.content.footer.whatsapp)}`"
        >{{ content.content.footer.whatsapp }}</a
      >
      <div class="social-icons">
        <a
          v-on:click="linkClick('github')"
          target="_blank"
          rel="noopener"
          :href="content.content.footer.github"
        >
          <svg-icon :path="mdiGithub" type="mdi" />
        </a>
        <a
          v-on:click="linkClick('linkedin')"
          target="_blank"
          rel="noopener"
          :href="content.content.footer.linkedin"
        >
          <svg-icon :path="mdiLinkedin" type="mdi" />
        </a>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { analytics, content } from "@/store";

export default defineComponent({
  name: "FooterSection",
  components: { SvgIcon },
  methods: {
    clearNumber: (tel: string) => {
      return tel.replaceAll(RegExp(/\s|-|\+/g), "");
    },
    linkClick: (linkName: string) => {
      analytics.logEvent("interaction", {
        eventAction: "click",
        eventLabel: linkName,
      });
    },
  },
  data() {
    return {
      content,
      mdiLinkedin,
      mdiGithub,
    };
  },
});
</script>
<style lang="sass">
.FT-Container
  background-color: $primary
  display: flex
  align-items: center
  justify-content: center
  padding: 43px 55px

  .separator-wrapper
    margin: 0 16px
    .vertical-separator
      width: 1px
      height: 50px
      background-color: $secondary
  .contact-info
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    text-align: left
    a
      text-decoration: none
      color: $text-alternative
    svg
      margin-top: .5rem
      color: $text-alternative
      width: 30px
      height: 30px
@media only screen and (min-width: 1920px)
  .FT-Container
    background-color: $primary
    display: flex
    align-items: center
    justify-content: center
    padding: 43px 55px

    .separator-wrapper
      margin: 0 16px
      .vertical-separator
        width: 1px
        height: 50px
        background-color: $secondary
    .contact-info
      display: flex
      flex-direction: column
      align-items: flex-start
      justify-content: center
      text-align: left
      a
        text-decoration: none
        color: $text-alternative
      svg
        margin-top: .5rem
        color: $text-alternative
        width: 30px
        height: 30px
</style>
