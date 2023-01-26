<template>
  <div class="Wrapper"><div class="box"></div></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingOverlay",
});
</script>
<style scoped>
.Wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style lang="css">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  background-color: #133f66;
}

.box {
  position: relative;
  height: 16rem;
  width: 16rem;
  outline: 0;
  overflow: hidden;
}
.box::before {
  content: url("../assets/logo-fill.svg");
  height: 100%;
  width: 100%;
  transform: scale(0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.box::after {
  content: "";
  position: absolute;
  bottom: -50%; /* Center sauare */
  left: -50%; /* Center sauare */
  height: 200%;
  width: 200%;
  background-color: #133f66;
  border-radius: 35%; /* Smooth edges to appear like liquid */
  animation: spin 8s ease-in-out infinite; /* Set to forwards to freeze on last frame */
}

@keyframes spin {
  100% {
    transform: translateY(-100%) rotate(400deg);
  }
  0% {
    transform: translateY(-100%) rotate(400deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
}
</style>
