<template>
  <div class="Header">
    <div class="H-Wrapper">
      <img src="@/assets/logo.svg" alt="Logo Murilo Pereira" />
    </div>
    <div class="H-Nav">
      <nav>
        <a href="#portifolio">PORTIFÓLIO</a>
        <a href="#exp">EXPERIÊNCIA</a>
        <a href="#form">CONTATO</a>
      </nav>
    </div>
    <div class="H-Scroll">
      <img src="@/assets/mouse.svg" alt="Mouse Scroll" />
      <p>Deslize para ver mais</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.Header,
.H-Wrapper,
.H-W-Social,
.H-Nav nav {
  display: flex;
  align-items: center;
}

.Header {
  position: relative;
  height: 100%;

  .H-Scroll {
    display: none;

    img {
      position: relative;
      animation: scroll 1s infinite;
      animation-direction: alternate;
    }

    @keyframes scroll {
      from {
        top: 0;
      }
      to {
        top: 10px;
      }
    }
  }

  .H-Nav {
    position: absolute;
    bottom: 0;
    width: 100%;

    nav {
      width: 100%;
      justify-content: space-evenly;
      padding-bottom: 1rem;

      a {
        text-decoration: none;
        cursor: pointer;
        color: #133f66;
      }

      a:nth-child(2n) {
        color: #206a5d;
      }
    }
  }
}

.Header,
.H-Wrapper {
  flex-direction: column;
  justify-content: center;

  img {
    width: 20rem;
    height: auto;
  }
}

@media only screen and (min-width: 768px) {
  .Header,
  .H-Wrapper {
    img {
      width: 30rem;
    }

    .H-Nav {
      top: 0;
      padding-top: 1rem;
      margin-right: 1.5rem;

      nav {
        justify-content: flex-end;
        padding-bottom: 1rem;

        a {
          font-size: 1.5rem;
        }

        a:nth-child(2n) {
          margin: 0 1rem;
        }

        a:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

@media only screen and (min-width: 1280px) {
  .Header {
    margin-top: 0rem;
    position: relative;

    .H-Scroll {
      bottom: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 2.5rem;
      }

      p {
        margin-top: 0.5rem;
        color: #1b1c25;
      }
    }
  }

  .Header,
  .H-Wrapper {
    height: 100%;
    height: 100vh;
    img {
      width: 35rem;
    }
  }
}
</style>
