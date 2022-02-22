<template>
  <div class="Work">
    <p class="W-Employer">{{ employer }}</p>
    <p class="W-Period">{{ startDate }} - {{ endDate }}</p>
    <p class="W-Title">{{ title }}</p>
    <p class="W-Techs">{{ techs.join("/") }}</p>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    employer: String,
    techs: Array,
    startDate: String,
    endDate: String,
    title: String,
  },
})
export default class Work extends Vue {}
</script>

<style scoped lang="scss">
.Work {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  p {
    margin: 0;
    text-align: left;
    color: #1b1c25;
    width: 100%;
  }

  .W-Employer {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .W-Period,
  .W-Title,
  .W-Techs {
    font-size: 1rem;
  }
}
</style>
