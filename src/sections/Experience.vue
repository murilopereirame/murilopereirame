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
import axios from "axios";
//@ts-ignore
import { VueAgile } from "vue-agile";
import Work from "../components/Work.vue";
import Title from "../components/Title.vue";
import Swipe from "../components/Swipe.vue";

@Options({
  components: { Work, Title, Swipe, agile: VueAgile },
  methods: {
    async loadExperiences() {
      try {
        const result = await axios.get(
          `${process.env.VUE_APP_API_URL}/experiences`
        );

        if (result.data.success) this.works = result.data.data;
      } catch (err) {
        this.works = [];
      }
    },
  },
  beforeMount() {
    this.loadExperiences();
  },
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
