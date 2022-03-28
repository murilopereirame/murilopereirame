<template>
  <div class="Title">
    <p class="T-Back">{{ text }}</p>
    <p class="T-Front">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class Title extends Vue {}
</script>

<style scoped lang="scss">
.Title {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .T-Back {
    position: absolute;
    margin: auto 0;
    color: #f4f4f4;
    font-weight: 900;
    font-size: 3.5rem;
    z-index: 1;
    letter-spacing: 2.5px;
  }

  .T-Front {
    color: #1f4068;
    font-weight: 900;
    z-index: 2;
    font-size: 2rem;
    letter-spacing: 2.5px;
    margin: 0;
  }
}

@media only screen and (min-width: 540px) {
  .Title {
    .T-Back {
      font-size: 6.5rem;
    }

    .T-Front {
      font-size: 4.75rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .Title {
    .T-Back {
      font-size: 7.5rem;
    }

    .T-Front {
      font-size: 5.75rem;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .Title {
    .T-Back {
      font-size: 8.5rem;
    }

    .T-Front {
      font-size: 6.75rem;
    }
  }
}
</style>
