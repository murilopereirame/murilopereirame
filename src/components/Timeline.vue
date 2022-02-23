<template>
  <div class="Timeline">
    <div class="T-Wrapper">
      <div class="T-Line"></div>
      <div class="T-Years">
        <Year year="18" active />
        <Year year="19" />
        <Year year="20" />
        <Year year="21" />
        <Year year="22" />
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
.T-Years {
  width: 100%;
}

.T-Line {
  width: calc(100% - 1rem);
}

.T-Wrapper {
  position: relative;
  padding: 0 0.5rem;
}

.T-Line {
  background-color: #c5c5c5;
  height: 2px;
  position: absolute;
  top: 50%;
  bottom: 50%;
  margin: 0 auto;
  z-index: 0;
}

.T-Years {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.T-Years {
  .Year {
    margin-right: 1rem;
  }

  .Year:last-of-type {
    margin-right: 0;
    margin-left: auto;
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
