<template>
  <div class="Contact">
    <div class="C-Wrapper">
      <p>CONTATO</p>
      <form>
        <input type="text" placeholder="NOME" aria-label="Digite seu nome" />
        <input type="email" placeholder="EMAIL" aria-label="Digite seu email" />
        <textarea aria-label="Digite sua mensagem" placeholder="MENSAGEM...." />
        <div class="C-From-Footer">
          <div class="C-Info">
            <a
              href="mailto:contato@murilopereira.dev.br"
              aria-label="Enviar email"
              >contato@murilopereira.dev.br</a
            >
            <a href="callto:+5518981892681" aria-label="Ligar para celular"
              >+55 (18) 98189-2681</a
            >
          </div>
          <button type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.Contact {
  .C-Wrapper {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
      font-size: 2.5rem;
      font-weight: bold;
      letter-spacing: 0.5rem;
      margin: 3rem 0 0.75rem 0;
    }

    .C-From-Footer {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;
      margin-top: 0.5rem;

      button {
        border: none;
        background-color: #186c5f;
        color: #ebecf1;

        padding: 0.35rem 1.5rem;
        border-radius: 0.25rem;
        margin-right: -0.25rem;
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
        background-color: rgba(24, 108, 95, 0.1);
        border-radius: 0.15rem;
        color: #1d1d1b;
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        margin-top: 0.25rem;
        padding: 0.35rem 0.25rem;
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
}
</style>
