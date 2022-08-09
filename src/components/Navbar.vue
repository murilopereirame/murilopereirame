<template>
  <div class="mobile-navbar-container">
    <img src="../assets/logo.svg" alt="Logo Murilo Pereira" />
    <div
      class="mobile-nav-items"
      :class="{
        'item-hidden': hideNavItems,
      }"
      v-on:click="handleNav"
    >
      <NavbarItem title="Projetos" href="#projetos" />
      <NavbarItem title="Experiência" href="#exp" />
      <NavbarItem title="Contato" href="#contato" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavbarItem from "./NavItem.vue";

export default defineComponent({
  name: "NavbarComponent",
  data() {
    return {
      hideNavItems: true,
    };
  },
  methods: {
    handleNav() {
      this.hideNavItems = !this.hideNavItems;
    },
  },
  components: {
    NavbarItem,
  },
});
</script>
<style lang="sass" scoped>
.mobile-navbar-container
  display: flex
  align-items: center
  justify-content: space-between
  padding: 32px 26px 32px 20px
  overflow: hidden
  img
    width: 100%
    max-width: 150px
  .mobile-nav-items
    -webkit-transition: 1s ease-in-out
    -moz-transition: 1s ease-in-out
    -o-transition: 1s ease-in-out
    transition: 1s ease-in-out
    display: flex
    flex-direction: column
    align-items: flex-start
    cursor: pointer
    *
      margin: 0 0 0 0
</style>

<style lang="sass">
.item-hidden
  transform: translate(100%)
  .m-nav-item
    a
      opacity: 0
      transition: opacity .25s linear
</style>
