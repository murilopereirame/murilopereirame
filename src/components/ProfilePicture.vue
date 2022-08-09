<template>
  <div class="profile-picture-container">
    <img src="../assets/me.png" alt="Retrato Murilo Pereira" />
    <div
      v-on:click="handleNav"
      class="hide-on-desktop idea-button"
      :class="{
        'extend-width': hideIcon,
      }"
    >
      <svg-icon
        :path="path"
        type="mdi"
        :class="{
          'hiden-button': hideIcon,
        }"
      />
      <a
        :class="{
          'hiden-button': !hideIcon,
        }"
        ><p>Vamos desenvolver um projeto <span>juntos</span>?</p></a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiLightbulbOnOutline } from "@mdi/js";

export default defineComponent({
  name: "ProfilePicture",
  components: {
    SvgIcon,
  },
  methods: {
    handleNav() {
      this.hideIcon = !this.hideIcon;
    },
  },
  data() {
    return {
      path: mdiLightbulbOnOutline,
      hideIcon: false,
    };
  },
});
</script>
<style lang="sass" scoped>
.profile-picture-container
  height: 100%
  position: relative
.idea-button
  background-color: $primary
  display: flex
  max-width: 195px
  align-items: center
  justify-content: center
  position: absolute
  min-height: 60px
  max-height: 60px
  width: 60px
  transition: width .25s linear
  top: 75%
  left: 30px
  cursor: pointer
  .hiden-button
    position: absolute
    visibility: hidden
    opacity: 0
    transition: opacity 1s linear
  svg
    width: 36px
    height: 36px
    color: $secondary
    padding: 12px
    transition: opacity 1s linear
  a
    transition: opacity 1s linear
  p
    margin: 0px 5px 0px 5px
    text-align: left
    font-size: 1.25rem
    padding: 5px 5px 5px 5px
    width: fit-content
    min-width: 175px
    line-height: 20px
    color: $text-primary
    span
      font-weight: bold

.extend-width
  width: 195px
</style>
