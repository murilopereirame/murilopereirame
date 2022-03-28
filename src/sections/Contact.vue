<template>
  <div class="Contact" id="form">
    <Title text="CONTATO" />
    <div class="C-Wrapper">
      <form>
        <input
          type="text"
          :value="name"
          @input="(evt) => (name = evt.target.value)"
          placeholder="Nome"
          aria-label="Digite seu nome"
        />
        <input
          :value="email"
          @input="(evt) => (email = evt.target.value)"
          type="email"
          placeholder="E-mail"
          aria-label="Digite seu email"
        />
        <textarea
          :value="message"
          @input="(evt) => (message = evt.target.value)"
          aria-label="Digite sua mensagem"
          placeholder="Mensagem"
        />
        <div class="C-Form-Footer">
          <button v-on:click="handleSend" type="button">ENVIAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Title from "../components/Title.vue";

@Options({
  components: { Title },
  methods: {
    handleSend() {
      console.log(this.email);
    },
  },
  data: () => ({
    email: "",
  }),
})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.Contact {
  margin-top: 5rem;
  .C-Wrapper {
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .C-Form-Footer {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      margin-top: 1.25rem;

      button {
        border: none;
        background-color: #186c5f;
        color: #ebecf1;

        padding: 0.25rem 2.25rem;
        font-size: 1.15rem;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      padding: 0 0.25rem;

      .C-Info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: -0.25rem;

        a {
          text-decoration: none;
          cursor: pointer;
          color: #1d1d1b;
        }

        a:last-child {
          margin-top: 0.05rem;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 325px;

      input,
      textarea {
        border: none;
        background-color: #fff;
        color: #575756;
        font-weight: 300;
        border-radius: 0.15rem;
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        margin-top: 0.5rem;
        padding: 0.5rem 0.5rem;
      }

      textarea {
        height: 100px;
      }

      input::placeholder,
      textarea::placeholder {
        color: #1d1d1b;
        font-weight: bold;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .C-Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      > p {
        font-size: 3.25rem;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 575px;

        input,
        textarea {
          font-size: 1.15rem;
        }

        textarea {
          height: 175px;
        }
      }

      .C-Form-Footer {
        button {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .C-Wrapper {
      margin-bottom: 1rem;

      > p {
        margin: 2.75rem 0 1.5rem 0;
      }

      form {
        width: 80%;
        max-width: 1366px;
      }
    }
  }
}
</style>
