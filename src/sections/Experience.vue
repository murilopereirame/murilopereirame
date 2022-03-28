<template>
  <div class="Experience" id="exp">
    <Title text="EXPERIÊNCIA" />
    <div class="E-Wrapper">
      <agile :options="options" :infinite="true">
        <div v-for="work in works" v-bind:key="work.title" class="exp-slide">
          <Work
            :employer="work.employer"
            :techs="work.techs"
            :startDate="work.startDate"
            :endDate="work.endDate"
            :title="work.title"
          />
        </div>
      </agile>
      <Swipe />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//@ts-ignore
import { VueAgile } from "vue-agile";
import Work from "../components/Work.vue";
import Title from "../components/Title.vue";
import Swipe from "../components/Swipe.vue";

@Options({
  components: { Work, Title, Swipe, agile: VueAgile },
  data: () => ({
    options: {
      settings: {
        mobileFirst: true,
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
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    },
    works: [
      {
        employer: "Gerenet Tecnologia",
        techs: ["PHP", "HTML", "CSS", "JS"],
        startDate: "2019",
        endDate: "2021",
        title: "Fullstack",
      },
      {
        employer: "PREF. PRES. PRUDENTE",
        techs: ["PHP", "React", "Flutter"],
        startDate: "2020",
        endDate: "2021",
        title: "Fullstack",
      },
      {
        employer: "Compass UOL",
        techs: ["React-Native"],
        startDate: "2021",
        endDate: "Atual",
        title: "Front-End",
      },
    ],
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

  .agile {
    overflow: hidden;
  }

  .agile__slide {
    display: flex;
    justify-content: center;
  }

  .E-Wrapper {
    user-select: none;
    margin-top: 1rem;
    width: 97.5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
