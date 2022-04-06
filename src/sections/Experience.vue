<template>
  <div class="Experience" id="exp">
    <Title text="EXPERIÊNCIA" />
    <div class="E-Wrapper">
      <Swiper
        class="work-swipe"
        @slideChange="onSwipe"
        :breakpoints="swiperOptions.breakpoints"
      >
        <SwiperSlide
          v-for="work in works"
          v-bind:key="work.id"
          class="work-slide"
        >
          <Work
            :employer="work.employer"
            :techs="work.techs"
            :startDate="work.startDate"
            :endDate="work.endDate"
            :role="work.role"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <Swipe />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getAnalytics, logEvent } from "firebase/analytics";
import axios from "axios";
import Work from "../components/Work.vue";
import Title from "../components/Title.vue";
import Swipe from "../components/Swipe.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
@Options({
  components: { Work, Title, Swipe, Swiper, SwiperSlide },
  methods: {
    onSwipe() {
      const analytics = getAnalytics();
      logEvent(analytics, "experience_swipe");
    },
    async loadExperiences() {
      try {
        const result = await axios.get(
          `${process.env.VUE_APP_API_URL}/experiences`
        );

        if (result.data.success) this.works = result.data.data;
      } catch (err) {
        const analytics = getAnalytics();
        logEvent(analytics, "error", {
          error: err,
          class: "experience",
        });
        this.works = [];
      }
    },
  },
  beforeMount() {
    this.loadExperiences();
  },
  data: () => ({
    swiperOptions: {
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    },
    works: [],
  }),
})
export default class Experience extends Vue {}
</script>

<style scoped lang="scss">
.Experience {
  margin-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .E-Wrapper {
    user-select: none;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      width: 80%;
    }

    .swiper-container {
      width: 90%;

      .swiper-slide {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
