import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { EN_US } from "./en/translations";
import { PT_BR } from "./pt/translations";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   debug: true,
   fallbackLng: 'pt',
   resources: {
     en: {
       translation: EN_US
     },
     pt: {
       translation: PT_BR
     }
   }
 });
 