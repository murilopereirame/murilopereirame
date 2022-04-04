<template>
  <div class="Job">
    <div class="J-Image">
      <img :src="image" alt="Job Image" />
    </div>
    <div class="J-Wrapper">
      <div class="J-Info">
        <span>{{ year }}</span>
        <p>{{ title }}</p>
      </div>
      <div class="J-Techs">
        <div class="J-Tech" v-for="tech in techs" :key="tech">
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    techs: Array,
    year: String,
    image: String,
    active: Boolean,
  },
})
export default class Job extends Vue {}
</script>

<style scoped lang="scss">
.Job {
  display: flex;
  flex-direction: column;
  height: 648px;
  max-width: 565px;
  position: relative;
  overflow: hidden;

  border: 2.5px solid #133f66;
  background-color: #133f66;

  .J-Image {
    img {
      object-fit: cover;
      width: 100%;
      height: 648px;
    }
  }

  .J-Wrapper {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    padding: 0.25rem 0.25rem;
    .J-Info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      color: #eeeeee;

      p {
        margin: 0;
        font-weight: bolder;
        text-transform: uppercase;
        font-size: 1.75rem;
      }
    }

    .J-Techs {
      display: grid;
      grid-template-columns: repeat(3, auto);
      column-gap: 0.25rem;
      row-gap: 0.25rem;
      grid-template-rows: auto;
      margin-top: 1rem;

      .J-Tech {
        background-color: #133f66;
        color: #eeeeee;
        padding: 0.15rem 0.25rem;
        width: 5rem;
      }
    }
  }
}

@media only screen and (min-width: 814px) {
  .Job {
    .J-Wrapper {
      .J-Info {
        span {
          font-size: 1.25rem;
        }

        p {
          font-size: 2.5rem;
        }
      }

      .J-Techs {
        margin-top: 0.5rem;

        .J-Tech {
          padding: 0.15rem 0.5rem;
          width: initial;
          min-width: 5rem;
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
