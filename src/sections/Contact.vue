<template>
  <section id="contato" class="Wrapper">
    <div class="C-Container">
      <p class="contact-title" v-html="content.content.contact.title"></p>
      <p class="contact-intro" v-html="content.content.contact.intro"></p>
      <form id="contact">
        <label v-if="errors.name" for="name">O Nome deve ser preenchido</label>
        <input
          :class="{ 'input-error': errors.name }"
          type="text"
          v-model="form.name"
          id="name"
          :placeholder="content.content.form.name"
          name="name"
        />
        <label v-if="errors.email" for="email">Email inválido</label>
        <input
          :class="{ 'input-error': errors.email }"
          id="email"
          :placeholder="content.content.form.email"
          v-model="form.email"
          name="email"
          type="email"
        />
        <label v-if="errors.message" for="message">Preencha sua mensagem</label>
        <textarea
          :class="{ 'input-error': errors.message }"
          id="message"
          :placeholder="content.content.form.message"
          v-model="form.message"
          name="mensagem"
        ></textarea>
        <div class="contact-submit">
          <input
            class="g-recaptcha"
            data-sitekey="6LfgPSQfAAAAAHrI0m6xklgKPhs_k5JGeSy6XoUS"
            :data-callback="submit"
            data-action="submit"
            @click="submit"
            type="submit"
            :value="
              sending
                ? content.content.form.button.sending
                : content.content.form.button.send
            "
          />
        </div>
      </form>
    </div>
  </section>
</template>
<script lang="ts">
import axios from "axios";
import { analytics, content } from "@/store";
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";

export default defineComponent({
  name: "ContactSection",
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
      },
      errors: {
        email: false,
        name: false,
        message: false,
      },
      sending: false,
      content,
    };
  },
  methods: {
    validateForm() {
      const emailRegex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );

      this.errors = {
        email: false,
        name: false,
        message: false,
      };

      if (this.form.name === "") this.errors.name = true;
      if (!this.form.email.match(emailRegex)) this.errors.email = true;
      if (this.form.message === "") this.errors.message = true;

      return !(this.errors.email || this.errors.name || this.errors.message);
    },
    async submit(e) {
      e.preventDefault();

      if (this.sending) return;

      analytics.logEvent("interaction", {
        eventAction: "click",
        eventLabel: "enviar",
      });

      this.sending = true;
      const toast = useToast();
      if (!this.validateForm()) {
        this.sending = false;
        return toast.error("Verifique o formulário e tente novamente");
      }

      try {
        await axios.post("https://api.murilopereira.dev.br/api/v1/contacts", {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        });
        this.sending = false;
        return toast.success("Mensagem enviada com sucesso");
      } catch (err) {
        this.sending = false;
        toast.error("Falha ao enviar sua mensagem.\nTente novamente");
      }
    },
  },
});
</script>
<style lang="sass" scoped>
.Wrapper
  background-color: $bg-light

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus
  color: $primary
  -webkit-box-shadow: 0 0 0px 1000px #fff inset
</style>
<style lang="sass">
.C-Container
  padding: 40px 0
  margin: 0 auto
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
    padding: 0 35px
    letter-spacing: 0.1em
    font-size: 1.1rem
    span
      font-weight: bold

  form
    padding: 0 40px
    margin-top: 35px
    display: flex
    flex-direction: column
    align-items: flex-start
    input, textarea
      width: 100%
      margin-bottom: .75em
      border: none
      border-radius: 7.5px
      padding: 7.5px 5px
      color: $primary
    textarea
      min-height: 100px
    label
      color: red
      padding-bottom: .25rem
    .input-error
      border: 1px solid red

  .contact-submit
    align-self: center
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
@media only screen and (min-width: 1024px)
  .C-Container
    .contact-intro
      padding: 0 5rem
    form
      padding: 0 3.5rem
      .contact-submit
        input
          cursor: pointer

@media only screen and (min-width: 1300px)
  .C-Container
    .contact-intro
      padding: 0 200px
    form
      padding: 0 180px
@media only screen and (min-width: 1920px)
  .C-Container
    max-width: 1920px
    .contact-intro
      padding: 0 390px
      font-size: 1.2rem
    form
      padding: 0 360px
      input, textarea
        font-size: 1.15rem
    .contact-submit
      input
        font-size: 1.25rem
        letter-spacing: .04em
</style>
