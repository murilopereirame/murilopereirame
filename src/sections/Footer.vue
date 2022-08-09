<template>
  <div class="FT-Container">
    <img src="../assets/logo-branca.svg" alt="Logo Murilo Pereira" />
    <div class="separator-wrapper"><div class="vertical-separator"></div></div>
    <div class="contact-info">
      <a href="mailto:contato@murilopereira.dev.br">
        contato@murilopereira.dev.br
      </a>
      <a rel="noopener" href="https://wa.me/5518981892681">+55 18 98189-2681</a>
      <div class="social-icons">
        <a
          target="_blank"
          rel="noopener"
          href="https://github.com/murilopereirame"
        >
          <svg-icon :path="mdiGithub" type="mdi" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.linkedin.com/in/mrochapereira/"
        >
          <svg-icon :path="mdiLinkedin" type="mdi" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

export default defineComponent({
  name: "FooterSection",
  components: { SvgIcon },
  data() {
    return {
      mdiLinkedin,
      mdiGithub,
    };
  },
});
</script>
<style lang="sass" scoped>
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
