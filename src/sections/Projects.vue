<template>
  <div class="P-Contaier">
    <p class="projects-title">Projetos e Serviço<u>s</u></p>
    <p class="projects-intro">
      Esses são alguns dos <span>meus projetos de desenvolvimento</span> ao
      longo da minha trajetória. Estou constantemente em busca de novas
      tecnologias, confira ao lado do título, inserido em cada box, as
      tecnologias utilizadas em cada trabalho.
    </p>
    <div class="projects-slide">
      <swiper
        :slides-per-view="2.3"
        :slides-offset-after="25"
        :slides-offset-before="30"
        :grid="{
          rows: 2,
          fill: 'row',
        }"
        :modules="modules"
        :space-between="10"
      >
        <swiper-slide>
          <JobComponent
            :techs="['Magento', 'Tray Corp']"
            title="Balbino Shop"
            year="2020"
            type="E-Commerce"
          />
        </swiper-slide>
        <swiper-slide>
          <JobComponent
            :techs="['ReactJS', 'Firebase', 'PHP', 'NodeJS']"
            title="Pref. Ed Thomas"
            year="2020"
            type="Site"
          />
        </swiper-slide>
        <swiper-slide>
          <JobComponent
            :techs="['Magento', 'Tray Corp']"
            title="Balbino Shop"
            year="2020"
            type="E-Commerce"
          />
        </swiper-slide>
        <swiper-slide>
          <JobComponent
            :techs="['ReactJS', 'Firebase', 'PHP', 'NodeJS']"
            title="Pref. Ed Thomas"
            year="2020"
            type="Site"
          />
        </swiper-slide>
        <swiper-slide>
          <JobComponent
            :techs="['Magento', 'Tray Corp']"
            title="Balbino Shop"
            year="2020"
            type="E-Commerce"
          />
        </swiper-slide>
        <swiper-slide>
          <JobComponent
            :techs="['ReactJS', 'Firebase', 'PHP', 'NodeJS']"
            title="Pref. Ed Thomas"
            year="2020"
            type="Site"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import JobComponent from "../components/Job.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

export default defineComponent({
  name: "ProjectsSection",
  components: { Swiper, SwiperSlide, JobComponent },
  setup() {
    return {
      modules: [Grid],
    };
  },
});
</script>
<style lang="sass" scoped>
.P-Contaier
  background-color: $primary
  height: 100%

  .projects-title
    u
      text-underline-offset: 1rem
      text-decoration-thickness: .25rem
    color: $secondary
    line-height: 68px
    padding: 68px 4.75rem 34px
    font-size: 5rem
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
</style>
