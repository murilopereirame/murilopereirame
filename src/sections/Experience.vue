<template>
  <div class="Experience" id="exp">
    <Title text="EXPERIÊNCIA" />
    <div class="E-Wrapper">
      <div class="E-Carousel">
        <TransitionGroup name="Exp-Transition">
          <Work
            v-for="(work, index) in works"
            :key="`item-${index}`"
            v-touch:swipe.left="next"
            v-touch:swipe.right="prev"
            :employer="work.employer"
            :techs="work.techs"
            :startDate="work.startDate"
            :endDate="work.endDate"
            :title="work.title"
            v-show="index <= index + 4"
          />
        </TransitionGroup>
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
  methods: {
    prev() {
      if (this.selectedExp === 0) this.selectedExp = this.works.length - 1;
      else this.selectedExp -= 1;
    },
    next() {
      if (this.selectedExp === this.works.length - 1)
        this.selectedExp -= this.works.length - 1;
      else this.selectedExp += 1;
    },
  },
  data: () => ({
    selectedExp: 0,
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
  margin-top: 10rem;
  .Exp-Transition-enter-active {
    transition: all 1.5s ease-in-out;
  }

  .Exp-Transition-leave-active {
    transition: all 1.2s ease-out;
    position: absolute;
    max-width: 80%;
  }

  .Exp-Transition-enter-from {
    opacity: 0.25;
  }

  .Exp-Transition-leave-to {
    opacity: 0.25;
  }

  .E-Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .E-Carousel {
      max-width: 100%;

      .Work {
        top: 0;
      }
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

    .E-Carousel {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
}

@media only screen and (min-width: 1920px) {
  .E-Wrapper {
    > p {
      margin: 3.5rem 0 1.5rem 0;
    }

    .E-Carousel {
      grid-template-rows: auto auto auto;
      grid-template-columns: auto auto auto;
    }
  }
}
</style>
