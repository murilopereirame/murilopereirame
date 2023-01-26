<template>
  <section class="Wrapper" id="projetos">
    <div class="P-Contaier">
      <p class="projects-title" v-html="content.content.projects.title"></p>
      <p class="projects-intro" v-html="content.content.projects.intro"></p>
      <div class="projects-slide">
        <swiper
          :modules="modules"
          :breakpoints="breakpoints"
          :space-between="15"
          :on-slide-change="onSwipe"
        >
          <swiper-slide v-bind:key="job.title" v-for="job in content.projects">
            <JobComponent
              :techs="job.techs.map((elem) => elem.title)"
              :title="job.title"
              :year="job.year.toString()"
              :type="job.type"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import JobComponent from "../components/Job.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import { analytics, content } from "@/store";

export default defineComponent({
  name: "ProjectsSection",
  components: { Swiper, SwiperSlide, JobComponent },
  methods: {
    onSwipe: () => {
      analytics.logEvent("interaction", {
        eventAction: "swipe",
        eventLabel: "portifolio",
      });
    },
  },
  setup() {
    return {
      modules: [Grid],
      content,
      breakpoints: {
        centeredSlides: true,
        centeredSlidesBounds: true,
        320: {
          slidesPerView: 1.75,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: "row",
          },
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 30,
        },
        400: {
          slidesPerView: 2.25,
          spaceBetween: 15,
          grid: {
            rows: 2,
            fill: "row",
          },
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 30,
        },
        500: {
          slidesPerView: 2.75,
          spaceBetween: 15,
          grid: {
            rows: 2,
            fill: "row",
          },
          slidesOffsetBefore: 30,
          slidesOffsetAfter: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
          grid: {
            rows: content.projects.length / 4,
            fill: "row",
          },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1024: {
          slidesPerView: 2.85,
          spaceBetween: 15,
          grid: {
            rows: content.projects.length / 6,
            fill: "row",
          },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 15,
          grid: {
            rows: content.projects.length / 3,
            fill: "row",
          },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 25,
          grid: {
            rows: content.projects.length / 4,
            fill: "row",
          },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        2560: {
          slidesPerView: 4,
          spaceBetween: 25,
          grid: {
            rows: content.projects.length / 4,
            fill: "row",
          },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.Wrapper
  background-color: $primary
  height: max-content
</style>
<style lang="sass">
.P-Contaier
  margin: 0 auto
  .projects-title
    u
      text-underline-offset: 1rem
      text-decoration-thickness: .25rem
    color: $secondary
    line-height: 68px
    padding: 68px 2rem 34px
    font-size: 4.5rem
    text-transform: uppercase
    font-family: 'Bebas Neue', cursive
  .projects-intro
    color: $text-primary
    padding: 0 3rem 1.5rem
    text-align: center
    font-weight: 300
    span
      font-weight: bold
  .projects-slide
    padding-bottom: 5rem

@media only screen and (min-width: 668px)
  .P-Contaier
    padding-top: 12.5%
    padding-bottom: 2rem
    .projects-slide
      padding: 0 30px
@media only screen and (min-width: 1360px)
  .P-Contaier
    padding: 5.5% 175px 2rem 175px
    .projects-slide
      padding: 0 0px
@media only screen and (min-width: 1920px)
  .P-Contaier
    max-width: 1920px
    padding: 5.5% 275px 2rem 275px
    .projects-title
      font-size: 5.75rem
    .projects-intro
      font-size: 1.25rem
      padding: 0 100px 1.5rem 100px
    .projects-slide
      padding: 0 0px
@media only screen and (min-width: 2560px)
  .P-Contaier
    padding: 5.5% 10% 2rem 10%
    .projects-intro
      padding: 0 10% 1.5rem 10%
    .projects-slide
      padding: 0 10.75%
</style>
