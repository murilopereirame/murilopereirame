<template>
  <div class="Footer">
    <div class="F-Wrapper">
      <img src="@/assets/logo.svg" alt="Logo Murilo Pereira" />
      <div class="F-Contact">
        <a href="mailto:contato@murilopereira.dev.br" aria-label="Enviar email"
          >contato@murilopereira.dev.br</a
        >
        <a href="tel:+5518981892681" aria-label="Ligar para celular"
          >+55 18 98189-2681</a
        >
      </div>
      <div class="F-Social">
        <a
          target="_blank"
          href="https://github.com/murilopereirame"
          rel="nofollow noreferrer"
        >
          <img src="@/assets/github.svg" alt="GitHub Logo" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mrochapereira/"
          rel="nofollow noreferrer"
        >
          <img src="@/assets/linkedin.svg" alt="LinkedIn Logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.Footer {
  background-color: #b3b3b33b;
  padding: 2.25rem 0;
  .F-Wrapper {
    > img {
      width: 10rem;
    }

    .F-Contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.25rem 0;

      a {
        text-decoration: none;
        cursor: pointer;
        color: #133f66;
        font-weight: 300;
      }
    }

    .F-Social {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 2rem;
      }

      img:last-of-type {
        margin-left: 0.25rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .F-Wrapper {
      > img {
        width: 15rem;
      }

      .F-Contact {
        a {
          font-size: 1.25rem;
        }
      }

      .F-Social {
        img {
          width: 3rem;
        }
      }
    }
  }
}
</style>
