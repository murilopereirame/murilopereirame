<template>
  <div class="Swipe" :class="down && 'S-Down'">
    <img
      :src="require(down ? '@/assets/mouse.svg' : '@/assets/finger.svg')"
      alt="swipe icon"
    />
    <p>Deslize para ver mais</p>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    down: Boolean,
  },
})
export default class Swipe extends Vue {}
</script>

<style scoped lang="scss">
.Swipe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin: 0.5rem 0 0.5rem 0;

  p {
    margin: 0 0 0 0.5rem;
  }

  img {
    width: 1.5rem;
    height: auto;
  }
}

.S-Down {
  flex-direction: column;

  img {
    width: 2rem;
  }
}

@media only screen and (min-width: 768px) {
  .Swipe {
    p {
      font-size: 1.25rem;
    }

    img {
      width: 2rem;
    }
  }
}
</style>
