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
        <div class="J-Info">
          <span>{{ year }}</span>
          <p>{{ title }}</p>
        </div>
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
    active: Boolean,
  },
})
export default class Job extends Vue {}
</script>

<style scoped lang="scss">
.Job {
  background-color: #1f4068;
  color: #ebecf1;
  position: relative;
  max-width: 100%;

  .J-Wrapper {
    display: flex;
    padding: 0.25rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .J-Overlay {
    top: 0;
    position: absolute;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    .J-O-Wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;

      p {
        margin: 0;
      }

      .J-Info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.15rem 0.5rem;

        > p {
          font-weight: 700;
          font-size: 2rem;
          margin: 0;
          line-height: 2.25rem;
        }

        > span {
          font-size: 1.15rem;
          font-weight: 300;
        }
      }

      .J-O-Techs {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0rem 0.5rem;
        padding-bottom: 0.4rem;
      }

      .J-Tech {
        background-color: #133f66;
        margin-right: 0.5rem;
        padding: 0.05rem 0.75rem;
        font-size: 0.9rem;
        font-weight: 300;
      }

      .J-Tech:last-child {
        margin-right: 0;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .J-Wrapper {
      max-height: calc(100% - 0.5rem);
    }

    .J-Overlay {
      .J-O-Wrapper {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;

        > span,
        .J-Tech {
          font-size: 1.1rem;
        }

        > p {
          font-weight: 500;
          font-size: 2.25rem;
        }
      }
    }
  }
}
</style>
