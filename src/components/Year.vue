<template>
  <div class="Year" :class="active && 'Active'">
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
  background-color: #133f66;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.75rem;
  width: 1rem;
  height: 1rem;

  z-index: 1;

  border-radius: 50%;

  text-align: center;

  span {
    color: #ebecf1;
    font-weight: 300;
    font-size: 1.2rem;
  }
}

.Active {
  background-color: #186c5f;
}

@media only screen and (min-width: 1280px) {
  .Year {
    padding: 1rem 1rem;
    width: 1.25rem;
    height: 1.25rem;

    span {
      font-size: 1.35rem;
    }
  }
}
</style>
