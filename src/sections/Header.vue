<template>
  <div class="Header">
    <div class="H-Wrapper">
      <img src="@/assets/logo.svg" alt="Logo Murilo Pereira" />
      <div class="H-W-Social">
        <img src="@/assets/github.svg" alt="GitHub Murilo Pereira" />
        <img src="@/assets/linkedin.svg" alt="LinkedIn Murilo Pereira" />
      </div>
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
.H-W-Social {
  display: flex;
  align-items: center;
}

.Header {
  margin-top: 3rem;
}

.Header,
.H-Wrapper {
  flex-direction: column;
  justify-content: center;

  img {
    width: 20rem;
    height: auto;
  }

  .H-W-Social {
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    margin-top: 0.5rem;

    img {
      width: 2rem;
      height: auto;
    }

    img:first-child {
      margin-right: 5px;
    }
  }
}

@media only screen and (min-width: 768px) {
  .Header,
  .H-Wrapper {
    img {
      width: 25rem;
    }

    .H-W-Social {
      img {
        width: 2.5rem;
        height: auto;
      }
    }
  }
}
</style>
