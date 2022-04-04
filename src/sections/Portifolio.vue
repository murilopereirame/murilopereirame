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
import axios from "axios";
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
  methods: {
    async loadJobs() {
      try {
        const result = await axios.get(`${process.env.VUE_APP_API_URL}/jobs`);

        if (result.data.success) this.jobs = result.data.data;
      } catch (err) {
        this.jobs = [];
      }
    },
  },
  beforeMount() {
    this.loadJobs();
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
      jobs: [],
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
