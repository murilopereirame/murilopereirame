import { createApp } from "vue";
import App from "./App.vue";
import Vue3TouchEvents from "vue3-touch-events";
import { VueReCaptcha } from "vue-recaptcha-v3";

createApp(App)
  .use(Vue3TouchEvents)
  .use(VueReCaptcha, { siteKey: process.env.VUE_APP_RECAPTCHA_KEY })
  .mount("#app");
