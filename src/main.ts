import { createApp } from "vue";
import App from "./App.vue";
import Vue3TouchEvents from "vue3-touch-events";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnxakZXjDIeeTponyxLuBTRSq3BDdz2C4",
  authDomain: "portifolio-78cdd.firebaseapp.com",
  projectId: "portifolio-78cdd",
  storageBucket: "portifolio-78cdd.appspot.com",
  messagingSenderId: "514246089640",
  appId: "1:514246089640:web:725fe13078617bf8da5b9d",
  measurementId: "G-W2K8MM69PE",
};

initializeApp(firebaseConfig);

createApp(App)
  .use(Vue3TouchEvents)
  .use(VueReCaptcha, { siteKey: process.env.VUE_APP_RECAPTCHA_KEY })
  .mount("#app");
