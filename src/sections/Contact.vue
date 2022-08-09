<template>
  <div class="C-Container">
    <p class="contact-title">VAMOS DESENVOLVE<u>R?</u></p>
    <p class="contact-intro">
      Se você precisa de um <span>Site, APP ou Software</span> está no lugar
      certo! Preencha com seus dados abaixo que retornarei seu contato.
    </p>
    <form id="contact">
      <input type="text" placeholder="Nome" name="name" />
      <input placeholder="E-mail" name="email" type="email" />
      <textarea placeholder="Mensagem" name="mensagem"></textarea>
      <div class="contact-submit">
        <input type="submit" value="Enviar" />
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactSection",
});
</script>
<style lang="sass" scoped>
.C-Container
  background-color: $bg-light
  padding: 40px

  .contact-title
    u
      text-underline-offset: 1rem
      text-decoration-thickness: .25rem
    color: $primary
    line-height: 1.15em
    text-align: center
    padding: 20px 0 35px 0
    font-size: 4.5rem
    text-transform: uppercase
    font-family: 'Bebas Neue', cursive
  .contact-intro
    color: $text-dark
    padding: 0 15px
    letter-spacing: 0.1em
    font-size: 1.1rem
    span
      font-weight: bold

  form
    margin-top: 35px
    input, textarea
      width: 90%
      margin-bottom: .75em
      border: none
      border-radius: 7.5px
      padding: 7.5px 5px
      color: $primary
    textarea
      min-height: 100px
  .contact-submit
    margin-top: 1.15rem
    input
      width: fit-content
      padding: 7.5px 30px
      background-color: $primary
      color: $secondary
      text-transform: uppercase
      border-radius: 5px
      font-size: 1rem
      letter-spacing: .04em
</style>
