<template>
  <div class="Portifolio" id="portifolio">
    <Title text="PORTIFÓLIO" />
    <div class="P-Wrapper">
      <div class="P-Jobs-Wrapper">
        <div class="P-Jobs">
          <Carousel v-bind:items-to-show="1">
            <Slide v-for="(job, index) in jobs" :key="`item-${index}`">
              <Job
                v-touch:swipe.left="next"
                v-touch:swipe.right="prev"
                :title="job.title"
                :techs="job.techs"
                :year="job.year"
                :image="job.image"
              />
            </Slide>
          </Carousel>
        </div>
      </div>
      <Swipe />
      <Timeline />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "vue3-carousel/dist/carousel.css";
//@ts-ignore
import { Carousel, Slide } from "vue3-carousel";

import Timeline from "../components/Timeline.vue";
import Job from "../components/Job.vue";
import Title from "../components/Title.vue";
import Swipe from "../components/Swipe.vue";

@Options({
  components: {
    Timeline,
    Job,
    Title,
    Swipe,
    Carousel,
    Slide,
  },
  data() {
    return {
      jobs: [
        {
          title: "JS Maia",
          techs: ["ReactJS", "NodeJS"],
          year: "2021",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "JS SSSS",
          techs: ["ReactJS", "NodeJS"],
          year: "2022",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "JS SSSS",
          techs: ["ReactJS", "NodeJS"],
          year: "2022",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "JS SSSS",
          techs: ["ReactJS", "NodeJS"],
          year: "2022",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
      ],
    };
  },
})
export default class Portifolio extends Vue {}
</script>

<style scoped lang="scss">
.Portifolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  .carousel__slide--next {
    margin-left: 0.5rem;
  }

  .carousel__slide--prev {
    padding-right: 0.5rem;
  }

  .P-Wrapper {
    .P-Jobs {
      display: grid;
      grid-template-columns: auto auto;
      row-gap: 0.5rem;
      column-gap: 0.5rem;
      margin-top: 1.25rem;
      padding-left: 0.5rem;
      justify-items: center;
    }
  }

  .P-Jobs-Wrapper {
    margin-bottom: 1rem;
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
