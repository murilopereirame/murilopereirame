<template>
  <div class="Portifolio" id="portifolio">
    <Title text="PORTIFÓLIO" />
    <div class="P-Wrapper">
      <agile :options="options" :infinite="true">
        <div v-for="job in jobs" v-bind:key="job.title" class="slide">
          <Job
            :key="job.title"
            :title="job.title"
            :techs="job.techs"
            :year="job.year"
            :image="job.image"
          />
        </div>
      </agile>
    </div>
    <Swipe />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//@ts-ignore
import { VueAgile } from "vue-agile";

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
    agile: VueAgile,
  },
  data: () => {
    return {
      options: {
        mobileFirst: true,
        settings: {
          mobileFirst: true,
          slidesToShow: 1,
        },
        responsive: [
          {
            breakpoint: 200,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1900,
            settings: {
              slidesToShow: 4,
            },
          },
        ],
      },
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
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .P-Wrapper {
    user-select: none;
    margin-top: 1rem;
    width: 97.5%;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 1920px) {
      & {
        width: 80%;
      }
    }

    .agile {
      overflow: hidden;
    }

    .agile__slide {
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 7.5rem;
  }
}
</style>
