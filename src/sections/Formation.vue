<template>
  <section id="experiencia" class="Wrapper">
    <div class="F-Container">
      <p class="formation-title" v-html="content.content.formation.title"></p>
      <div class="F-Wrapper">
        <div class="Formation-Container">
          <p
            class="formation-intro"
            v-html="content.content.formation.intro"
          ></p>
          <div class="formation-degress">
            <swiper
              :slides-per-view="1.5"
              :slides-offset-after="0"
              :slides-offset-before="0"
              :space-between="0"
              :loop="false"
              :breakpoints="bformation"
            >
              <swiper-slide
                v-bind:key="formation.title"
                v-for="formation in content.formations"
              >
                <DegreeComponent
                  :title="formation.title"
                  :institution="formation.institution"
                  :degree="formation.degree"
                  :interval="`${formation.start_date.getFullYear().toString()}${
                    formation.end_date
                      ? ' - ' + formation.end_date.getFullYear().toString()
                      : ''
                  }`"
                  :icon="icons[formation.icon]"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="Skills-Container">
          <SkillComponent
            v-bind:key="skill.title"
            v-for="skill in content.content.skills"
            :title="skill.title"
            :highlight="skill.highlight"
            :info="skill.info"
          />
        </div>
      </div>
      <div class="E-Container">
        <swiper
          :slides-per-view="1.35"
          :slides-offset-after="25"
          :slides-offset-before="0"
          :space-between="20"
          :breakpoints="breakpoints"
        >
          <swiper-slide
            v-bind:key="exp.company"
            v-for="exp in content.experiences"
          >
            <ExperienceCompoent
              :company="exp.company"
              :description="exp.description"
              :interval="`${exp.start_date.getFullYear().toString()}${
                exp.end_date
                  ? ' - ' + exp.end_date.getFullYear().toString()
                  : ' - Atual'
              }`"
              :role="exp.role"
              :techs="exp.techs.map((elem) => elem.title)"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as icons from "@mdi/js";
import DegreeComponent from "../components/Degree.vue";
import SkillComponent from "../components/Skill.vue";
import ExperienceCompoent from "../components/Experience.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import { analytics, content } from "@/store";

export default defineComponent({
  name: "FormationSection",
  data() {
    return {
      icons,
      content,
      breakpoints: {
        320: {
          slidesPerView: 1.15,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 1.25,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 1.75,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
      bformation: {
        slidesPerView: 1.5,
        1360: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    };
  },
  methods: {
    onFormationSwipe: () => {
      analytics.logEvent("interaction", {
        eventAction: "swipe",
        eventLabel: "formation",
      });
    },
    onExperienceSwipe: () => {
      analytics.logEvent("interaction", {
        eventAction: "swipe",
        eventLabel: "experience",
      });
    },
  },
  components: {
    DegreeComponent,
    SkillComponent,
    ExperienceCompoent,
    Swiper,
    SwiperSlide,
  },
});
</script>
<style lang="sass" scoped>
.Wrapper
  background: linear-gradient(180deg, $bg-normal 95%, $bg-light 95%)
</style>
<style lang="sass">
.F-Container
  margin: 0 auto
  padding: 0 30px
  padding-right: 0
  .formation-title
    u
      text-underline-offset: 1rem
      text-decoration-thickness: .25rem
    color: $secondary
    line-height: 1.15em
    text-align: left
    padding: 68px 0 35px 0
    font-size: 4.5rem
    text-transform: uppercase
    font-family: 'Bebas Neue', cursive

  .formation-intro
    font-size: 1rem
    color: $text-alternative
    text-align: left
    span
      font-weight: bold
    padding-right: 30px
    margin-right: 30px
  .formation-degress
    padding-top: 32px
    padding-bottom: 32px

@media only screen and (min-width: 668px)
  .F-Container
    background: linear-gradient(180deg, $bg-normal 95%, $bg-light 95%)
    .formation-title
      text-align: center
    .F-Wrapper
      max-width: 100%
      display: flex
      .Formation-Container
        max-width: 60%
        flex: 1
        .formation-intro
          font-size: .9rem
        .formation-degress
          margin-right: 60px
      .Skills-Container
        flex: 1
        padding-right: 30px
@media only screen and (min-width: 1024px)
  .F-Container
    .F-Wrapper
      padding: 0 30px 0 60px
@media only screen and (min-width: 1360px)
  .F-Container
    padding: 0 150px
    .F-Wrapper
      .Formation-Container
        max-width: 55%
        padding-left: 5%
@media only screen and (min-width: 1920px)
  .F-Container
    max-width: 1920px
    padding: 0 250px
    .F-Wrapper
      padding: 0 50px
      .Formation-Container
        max-width: 57.5%
        padding-left: 7.5%
        .formation-intro
          font-size: 1.25rem
@media only screen and (min-width: 2560px)
  .F-Container
    padding: 0 10%
    .F-Wrapper
      padding: 0 50px
      .Formation-Container
        max-width: 57.5%
        padding-left: 10.5%
  .E-Container
    padding: 0 8.5%
</style>
