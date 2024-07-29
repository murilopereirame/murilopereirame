<template>
  <nav class="mobile-navbar-container">
    <img src="../assets/logo.svg" alt="Logo Murilo Pereira" />
    <div
      class="mobile-nav-items"
      :class="{
        'item-hidden': hideNavItems,
      }"
      @click="handleNav"
    >
      <NavbarItem
        :closeNav="closeNav"
        :isOpen="!hideNavItems"
        :title="content.content.menu.projects"
        href="#projetos"
      />
      <NavbarItem
        :closeNav="closeNav"
        :isOpen="!hideNavItems"
        :title="content.content.menu.exp"
        href="#experiencia"
      />
      <NavbarItem
        :closeNav="closeNav"
        :isOpen="!hideNavItems"
        :title="content.content.menu.contact"
        href="#contato"
      />
    </div>
  </nav>
</template>
<script lang="ts">
import { analytics, content } from "@/store";
import { defineComponent } from "vue";
import NavbarItem from "./NavItem.vue";

export default defineComponent({
  name: "NavbarComponent",
  data() {
    return {
      hideNavItems: true,
      content,
    };
  },
  methods: {
    handleNav(e) {
      analytics.logEvent("interaction", {
        eventAction: "click",
        eventLabel: "navbar",
      });
      if (this.hideNavItems && window.innerWidth < 968) {
        e.stopPropagation();
        e.preventDefault();
      }
      this.hideNavItems = !this.hideNavItems;
    },
    closeNav() {
      if (window.innerWidth < 968) this.hideNavItems = true;
    },
  },
  beforeMount() {
    if (window.innerWidth > 968) this.hideNavItems = false;
  },
  components: {
    NavbarItem,
  },
});
</script>

<style lang="sass">
.item-hidden
  transform: translate(100%)
  .m-nav-item
    a
      opacity: 0
      transition: opacity .25s linear

@media only screen and (min-width: 668px)
  .item-hidden
    transform: unset
    .m-nav-item
      a
        opacity: 1
</style>

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

@media only screen and (min-width: 668px)
  .mobile-navbar-container
    img
      display: none
    .mobile-nav-items
      flex-direction: row
      width: 100%
      justify-content: flex-end
      .m-nav-item
        margin-left: 10px
</style>
