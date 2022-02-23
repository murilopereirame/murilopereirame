<template>
  <div class="Portifolio">
    <p>PORTIFOLIO</p>
    <div class="P-Wrapper">
      <div class="P-Jobs-Wrapper">
        <Timeline />
        <div class="P-Jobs">
          <Job
            title="JS Maia"
            v-bind:techs="['ReactJS', 'NodeJS']"
            year="2021"
            image="https://murilopereira.dev.br/static/media/jsmaia.995880cf.png"
          />
          <Job
            title="JS Maia"
            v-bind:techs="['ReactJS', 'NodeJS']"
            year="2021"
            image="https://murilopereira.dev.br/static/media/jsmaia.995880cf.png"
          />
          <Job
            title="JS Maia"
            v-bind:techs="['ReactJS', 'NodeJS']"
            year="2021"
            image="https://murilopereira.dev.br/static/media/jsmaia.995880cf.png"
          />
          <Job
            title="JS Maia"
            v-bind:techs="['ReactJS', 'NodeJS']"
            year="2021"
            image="https://murilopereira.dev.br/static/media/jsmaia.995880cf.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timeline from "../components/Timeline.vue";
import Job from "../components/Job.vue";

@Options({
  components: {
    Timeline,
    Job,
  },
})
export default class Portifolio extends Vue {}
</script>

<style scoped lang="scss">
.Portifolio {
  > p {
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin: 3rem 0 0.75rem 0;
  }

  .P-Wrapper {
    .P-Jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.5rem;
      column-gap: 0.5rem;
      margin-top: 1.25rem;
      padding: 0 0.5rem;
      justify-items: center;
    }
  }
}

@media only screen and (min-width: 768px) {
  .Portifolio {
    .P-Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .P-Jobs {
        grid-template-columns: 1fr 1fr 1fr;
      }

      .P-Jobs-Wrapper {
        max-width: 80%;
      }
    }

    > p {
      font-size: 3.25rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .Portifolio {
    height: 100vh;
    position: relative;

    .P-Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      max-height: 100vh;

      > p {
        font-size: 3.25rem;
      }

      .P-Jobs {
        max-height: 100%;
        margin-top: 0;
        margin-left: 1.5rem;
        grid-template-columns: auto auto auto;
        grid-auto-rows: minmax(min-content, max-content);
        overflow: hidden;
      }

      .P-Jobs-Wrapper {
        max-height: 100%;
        display: flex;
        flex-direction: row;
        max-width: 90%;
        align-items: center;
      }
    }

    > p {
      font-size: 3.25rem;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .Portifolio {
    .P-Wrapper {
      .P-Jobs {
        grid-template-columns: auto auto;
      }
    }
  }
}
</style>
