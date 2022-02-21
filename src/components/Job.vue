<template>
  <div class="Job">
    <div class="J-Wrapper">
      <img
        :src="image && image"
        :alt="title ? title + ' Image' : 'Job Image'"
      />
    </div>
    <div class="J-Overlay">
      <div class="J-O-Wrapper">
        <span>{{ year }}</span>
        <p>{{ title }}</p>
        <div class="J-O-Techs">
          <div class="J-Tech" v-for="tech in techs" :key="tech">
            {{ tech }}
          </div>
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
  },
})
export default class Job extends Vue {}
</script>

<style scoped lang="scss">
.Job {
  background-color: #1f4068;
  color: #ebecf1;
  border-radius: 0.25rem;
  position: relative;
  max-width: 100%;

  .J-Wrapper {
    display: flex;
    padding: 0.5rem;

    img {
      width: 100%;
    }
  }

  .J-Overlay {
    top: 0;
    position: absolute;

    width: 100%;
    height: 100%;

    border-radius: 0.25rem;
    background-color: rgba(24, 108, 95, 0.8);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    .J-O-Wrapper {
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      p {
        margin: 0;
      }

      .J-O-Techs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      .J-Tech {
        background-color: #1d1d1b;
        margin-right: 0.5rem;
        padding: 0.05rem 0.75rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 400;
      }

      .J-Tech:last-child {
        margin-right: 0;
      }

      > span {
        font-size: 0.75rem;
      }

      > p {
        font-weight: 500;
        font-size: 1.75rem;
      }
    }
  }
}
</style>
