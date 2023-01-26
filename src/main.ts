import { initializeApp } from "firebase/app";
import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import { getAnalytics } from "firebase/analytics";
import { analytics } from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyAnxakZXjDIeeTponyxLuBTRSq3BDdz2C4",
  authDomain: "portifolio-78cdd.firebaseapp.com",
  projectId: "portifolio-78cdd",
  storageBucket: "portifolio-78cdd.appspot.com",
  messagingSenderId: "514246089640",
  appId: "1:514246089640:web:725fe13078617bf8da5b9d",
  measurementId: "G-W2K8MM69PE",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

analytics.instance = firebaseAnalytics;

const vueApp = createApp(App);

vueApp.use(Toast);
vueApp.mount("#app");
