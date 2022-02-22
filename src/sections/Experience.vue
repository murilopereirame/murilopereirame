<template>
  <div class="Experience">
    <div class="E-Wrapper">
      <p>EXPERIÊNCIA</p>
      <div class="E-Grid">
        <Work
          employer="Gerenet Tecnologia"
          v-bind:techs="['PHP', 'HTML', 'CSS', 'JS']"
          startDate="05/2019"
          endDate="12/2019"
          title="Estagiário Fullstack"
        />
        <Work
          employer="P.M. Presidente Prudente"
          v-bind:techs="['PHP', 'Flutter', 'ReactJS']"
          startDate="01/2020"
          endDate="06/2021"
          title="Estagiário Fullstack"
        />
        <Work
          employer="Gerenet Tecnologia"
          v-bind:techs="['PHP', 'HTML', 'CSS', 'JS']"
          startDate="03/2020"
          endDate="07/2021"
          title="Desenvolvedor Fullstack"
        />
        <Work
          employer="Compass UOL"
          v-bind:techs="['React-Native']"
          startDate="07/2021"
          endDate="Hoje"
          title="Desenvolvedor Mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Work from "../components/Work.vue";

@Options({
  components: { Work },
})
export default class Experience extends Vue {}
</script>

<style scoped lang="scss">
.E-Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .E-Grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
    justify-items: flex-start;
    padding: 0 0.5rem;
  }

  > p {
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    margin: 3rem 0 0.75rem 0;
  }
}
</style>
