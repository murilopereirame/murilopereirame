<template>
  <div class="Portifolio" id="portifolio">
    <Title text="PORTIFÓLIO" @click="teste" />
    <div class="P-Wrapper">
      <div class="P-Swipe">
        <div
          class="P-Jobs"
          v-touch:swipe.left="next"
          v-touch:swipe.right="prev"
        >
          <TransitionGroup name="Job-Transition">
            <Job
              v-for="(job, index) in jobs"
              :key="`item-${index}`"
              :title="job.title"
              :techs="job.techs"
              :year="job.year"
              :image="job.image"
              v-show="shouldShow(index)"
            />
          </TransitionGroup>
        </div>
      </div>
      <Swipe />
      <div class="TL-Wrapper">
        <Timeline />
      </div>
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
  methods: {
    prev() {
      const steps = this.calculateAvaliableSpaces();
      if (this.selectedJob === 0) this.selectedJob = this.jobs.length - steps;
      else if (this.selectedJob - steps < 0) this.selectedJob = 0;
      else this.selectedJob -= steps;
    },
    next() {
      const steps = this.calculateAvaliableSpaces();
      if (
        this.selectedJob === this.jobs.length ||
        this.selectedJob + steps >= this.jobs.length
      )
        this.selectedJob = 0;
      else if (this.selectedJob + steps >= this.jobs.length)
        this.selectedJob = this.jobs.length - this.selectedJob + 1;
      else this.selectedJob += steps;
    },
    calculateAvaliableSpaces() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 720) return 1;
      else if (windowWidth < 1280) return 2;
      else return 4;
    },
    shouldShow(index: number) {
      const avaliableSpaces = this.calculateAvaliableSpaces();
      return (
        index >= this.selectedJob && index < this.selectedJob + avaliableSpaces
      );
    },
  },
  data: () => {
    return {
      selectedJob: 0,
      jobs: [
        {
          title: "Organ",
          techs: ["Flutter", "Dart"],
          year: "2020",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "Balbino Shop",
          techs: ["HTML", "CSS", "JS", "Tray Corp"],
          year: "2020",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "SafyPet",
          techs: ["ReactJS", "TypeScript", "PHP"],
          year: "2020",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "JS Maia",
          techs: ["ReactJS", "TypeScript", "PHP"],
          year: "2021",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "Felicidade A2",
          techs: ["ReactJS", "TypeScript"],
          year: "2021",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "Sueca Brasileira",
          techs: ["Java"],
          year: "2021",
          image:
            "https://murilopereira.dev.br/static/media/jsmaia.995880cf.png",
        },
        {
          title: "Eletromed",
          techs: ["ReactJS", "TypeScript", "PHP"],
          year: "2021",
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

  .P-Swipe {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .TL-Wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Job-Transition-enter-active {
    transition: all 1.5s ease-in-out;
  }

  .Job-Transition-leave-active {
    transition: all 1.2s ease-out;
    display: none;
    max-width: 80%;
  }

  .Job-Transition-enter-from {
    opacity: 0.15;
  }

  .Job-Transition-leave-to {
    opacity: 0.25;
  }

  .P-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .P-Jobs {
      display: grid;
      grid-template-columns: auto;
      row-gap: 0.5rem;
      column-gap: 0.5rem;
      margin-top: 1.25rem;
      padding-left: 0.5rem;
      justify-items: center;
      max-width: 80%;
      cursor: pointer;
      user-select: none;

      .Job {
        top: 0;
      }
    }

    .Timeline {
      margin-top: 0.5rem;
      width: 80%;
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

      .carousel__track {
        display: grid;
      }

      .P-Jobs {
        grid-auto-rows: 20rem;
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
    min-height: 100vh;
    position: relative;

    .P-Wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      > p {
        font-size: 3.25rem;
      }

      .P-Jobs {
        max-height: 100%;
        margin-top: 0;
        margin-left: 0rem;
        grid-template-columns: auto auto;
        grid-auto-rows: 17.5rem 17.5rem;
        row-gap: 1.5rem;
        column-gap: 1.5rem;
        overflow: hidden;
        padding-left: 0rem;
        max-width: 90%;
      }

      .P-Jobs-Wrapper {
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
        grid-auto-columns: auto auto;
      }
    }
  }
}
</style>
