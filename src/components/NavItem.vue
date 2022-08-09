<template>
  <div class="m-nav-item">
    <div class="square"></div>
    <a :href="href">
      <span>{{ title }}</span>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarItem",
  props: {
    title: String,
    href: String,
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
</style>
