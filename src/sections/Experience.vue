<template>
  <div class="Experience" id="exp">
    <Title text="EXPERIÊNCIA" />
    <div class="E-Wrapper">
      <div class="E-Carousel">
        <Carousel :items-to-show="1" :items-to-scroll="1">
          <Slide v-for="(work, index) in works" :key="`item-${index}`">
            <Work
              :employer="work.employer"
              :techs="work.techs"
              :startDate="work.startDate"
              :endDate="work.endDate"
              :title="work.title"
            />
          </Slide>
        </Carousel>
      </div>
      <Swipe />
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import "vue3-carousel/dist/carousel.css";
//@ts-ignore
import { Carousel, Slide } from "vue3-carousel";
import Work from "../components/Work.vue";
import Title from "../components/Title.vue";
import Swipe from "../components/Swipe.vue";

@Options({
  components: { Work, Title, Swipe, Carousel, Slide },
  data: () => ({
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
        title: "Fullstack",
      },
    ],
  }),
})
export default class Experience extends Vue {}
</script>

<style scoped lang="scss">
.Experience {
  .E-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .E-Carousel {
      max-width: 100%;
    }
  }
}

@media only screen and (min-width: 768px) {
  .E-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
      font-size: 3.25rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .E-Wrapper {
    > p {
      font-size: 3.25rem;
      margin: 2.75rem 0 1.5rem 0;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .E-Wrapper {
    > p {
      margin: 3.5rem 0 1.5rem 0;
    }
  }
}
</style>
