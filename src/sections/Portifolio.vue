<template>
  <div class="Portifolio">
    <div class="P-Wrapper">
      <p>PORTIFOLIO</p>
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

  > p {
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin: 3rem 0 0.75rem 0;
  }
}
</style>
