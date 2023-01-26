<template>
  <div class="m-nav-item">
    <div class="square"></div>
    <a @click="onItemClick" :href="href">
      <span>{{ title }}</span>
    </a>
  </div>
</template>
<script lang="ts">
import { analytics } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarItem",
  methods: {
    onItemClick: function (event) {
      if (this.isOpen) {
        this.closeNav!();
        event.stopPropagation();

        analytics.logEvent("interaction", {
          eventAction: "click",
          eventLabel: this.title || "",
        });
      }
    },
  },
  props: {
    title: String,
    href: String,
    isOpen: Boolean,
    closeNav: Function,
  },
});
</script>
<style lang="sass" scoped>
a
  text-decoration: none
  transition: opacity .25s linear
.m-nav-item
  display: flex
  align-items: center
  justify-content: flex-start
  .square
    width: 8px
    height: 8px
    background-color: $primary
    margin-right: 10px
  span
    font-weight: 400
    color: $primary
    text-transform: uppercase
    font-size: .875rem
  span:hover
    color: $alt

@media only screen and (min-width: 668px)
  .m-nav-item
    .square
      display: none
    span
      font-size: 1rem
@media only screen and (min-width: 1024px)
  .m-nav-item
    span
      font-size: 1.1rem
@media only screen and (min-width: 1360px)
  .m-nav-item
    span
      font-size: 1.15rem
@media only screen and (min-width: 1920px)
  .m-nav-item
    span
      font-size: 1.25rem
</style>
