<template>
  <div class="Work">
    <p class="W-Employer">{{ employer }}</p>
    <p class="W-Period">
      {{ new Date(startDate).getFullYear() }} -
      {{ endDate === "Atual" ? "Atual" : new Date(endDate).getFullYear() }}
    </p>
    <p class="W-Title">{{ role }}</p>
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
    role: String,
  },
})
export default class Work extends Vue {}
</script>

<style scoped lang="scss">
.Work {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  min-width: 326px;
  max-width: 90%;

  position: relative;

  p {
    margin: 0;
    text-align: left;
    width: 100%;
  }

  .W-Employer {
    font-weight: bold;
    font-size: 1.25rem;
    color: #133f66;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }

  .W-Period,
  .W-Title,
  .W-Techs {
    font-size: 1rem;
    color: #575756;
    letter-spacing: 2.5px;
    font-weight: lighter;
    margin-top: 0.25rem;
  }

  @media only screen and (min-width: 768px) {
    min-width: 520px;

    .W-Employer {
      font-size: 2.35rem;
    }
    .W-Period,
    .W-Title,
    .W-Techs {
      font-size: 1.75rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    .W-Employer {
      font-size: 2rem;
    }
    .W-Period,
    .W-Title,
    .W-Techs {
      font-size: 1.5rem;
    }
  }
}
</style>
