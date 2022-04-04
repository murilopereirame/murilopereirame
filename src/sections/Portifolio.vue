<template>
  <div class="Portifolio" id="portifolio">
    <Title text="PORTIFÓLIO" />
    <div class="P-Wrapper">
      <Swiper
        :slides-per-view="3"
        :space-between="25"
        centeredSlides
        loop
        class="job-swiper"
      >
        <SwiperSlide
          v-for="job in jobs"
          v-bind:key="job.title"
          class="job-slide"
          ><Job
            :key="job.title"
            :title="job.title"
            :techs="job.techs"
            :year="job.year"
            :image="job.image"
        /></SwiperSlide>
      </Swiper>
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

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

@Options({
  components: {
    Timeline,
    Job,
    Title,
    Swipe,
    Swiper,
    SwiperSlide,
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

    .swiper-container {
      width: 80%;
    }

    @media only screen and (min-width: 1920px) {
      & {
        width: 80%;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 7.5rem;
  }
}
</style>
