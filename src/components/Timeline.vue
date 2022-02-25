<template>
  <div class="Timeline">
    <div class="T-Wrapper">
      <div class="T-Line"></div>
      <div class="T-Years">
        <Year year="2018" />
        <Year year="2019" />
        <Year year="2020" />
        <Year year="2021" />
        <Year year="2022" active />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Year from "../components/Year.vue";

@Options({
  components: {
    Year,
  },
})
export default class Timeline extends Vue {}
</script>

<style lang="scss">
.Timeline {
  .T-Years {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    justify-content: space-between;
  }

  .T-Line {
    width: calc(100% - 2rem);
  }

  .T-Wrapper {
    position: relative;
    padding: 0 0.5rem;
  }

  .T-Line {
    background-color: #c5c5c5;
    height: 2px;
    position: absolute;
    top: 0.75rem;
    margin: 0 auto;
    z-index: 0;
  }
}

@media only screen and (min-width: 1280px) {
  .Timeline {
    height: 100%;
  }

  .T-Years {
    height: 100%;
  }

  .T-Line {
    height: calc(100% - 1rem);
  }

  .T-Wrapper {
    position: relative;
    padding: 0;
    width: min-content;
    height: 100%;
  }

  .T-Line {
    width: 2px;
    margin: auto 0;
    left: 50%;
    right: 50%;
  }

  .T-Years {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .Year {
      margin-right: 0;
      margin-bottom: 1.5rem;
    }

    .Year:last-of-type {
      margin-top: auto;
      margin-left: initial;
      margin-bottom: 0;
    }
  }
}
</style>
