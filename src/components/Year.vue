<template>
  <div class="Year">
    <div class="Y-Square" :class="active && 'Active'"></div>
    <span>{{ year }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    year: String,
    active: Boolean,
  },
})
export default class Timeline extends Vue {}
</script>

<style scoped lang="scss">
.Year {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .Y-Square {
    background-color: #133f66;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1rem;
    height: 1rem;

    z-index: 1;
    text-align: center;
  }

  span {
    color: #133f66;
    font-weight: 300;
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .Active {
    background-color: #186c5f;

    width: 1.5rem;
    height: 1.5rem;
  }
}

@media only screen and (min-width: 768px) {
  .Year {
    .Y-Square {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      font-size: 1.25rem;
    }

    .Active {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .Year {
    .Y-Square {
      padding: 1rem 1rem;
      width: 1rem;
      height: 1rem;

      span {
        font-size: 1.35rem;
      }
    }

    .Active {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
