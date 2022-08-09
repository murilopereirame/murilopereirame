<template>
  <div class="F-Container">
    <p class="formation-title">Formação e Experiênc<u>ia</u></p>
    <div class="F-Wrapper">
      <div class="Formation-Container">
        <p class="formation-intro">
          Em 2018 iniciei meu bacharel em <span>Ciências da Computação</span>,
          com finalização em 2022.<br />Durante o período de graduação,
          ministrei diferentes <span>minicursos</span> e fui
          <span>monitor voluntário</span> de diferentes matérias.<br /><br />
          Ao longo da minha jornada profissional, desenvolvi muitas habilidades.
          Dentre elas <span>responsabilidade, disciplina e flexibilidade</span>.
          Tenho muito interesse e vontade de contribuir de forma significativa
          para com tudo que proponho a fazer.
        </p>
        <div class="formation-degress">
          <swiper
            :slides-per-view="1.5"
            :slides-offset-after="0"
            :slides-offset-before="0"
            :space-between="0"
          >
            <swiper-slide>
              <DegreeComponent
                title="Bacharel"
                institution="UNESP Pres. Prudente"
                degree="Ciência da Computação"
                interval="2018 - 2022"
                :icon="icon"
              />
            </swiper-slide>
            <swiper-slide>
              <DegreeComponent
                title="Idioma"
                institution="CNA Pres. Prudente"
                degree="Inglês"
                interval="2014 - 2018"
                :icon="icon"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="Skills-Container">
        <SkillComponent
          title="Conhecimento em "
          highlight="ferramentas:"
          info="Git, VS Code, Mercurial, MySQL Workbench e Firebase."
        />
        <SkillComponent
          title="Domínio em "
          highlight="linguagens:"
          info="JavaScript, HTML, C#, TypeScript, PHP e CSS"
        />
        <SkillComponent
          title="Experiência com "
          highlight="stacks e frameworks:"
          info="Flutter, React Native, SASS, ReactJS, Vue, TrayCorp, Magento, NodeJS, Laravel"
        />
        <SkillComponent
          title="Conhecimento:"
          highlight=""
          info="UI/UX e metodologias ágeis."
        />
      </div>
    </div>
    <div class="E-Container">
      <swiper
        :slides-per-view="1.35"
        :slides-offset-after="25"
        :slides-offset-before="0"
        :space-between="10"
      >
        <swiper-slide>
          <ExperienceCompoent
            company="Gerenet Tecnologia"
            description="Manutenção de sistema legado e desenvolvimento de novas funcionalidades para o ERP da empresa."
            interval="2019 - 2021"
            role="Fullstack"
            :techs="['PHP', 'MySQL', 'HTML', 'JS']"
          />
        </swiper-slide>
        <swiper-slide>
          <ExperienceCompoent
            company="P.M. Pres. Prudente"
            description="Desenvolvimento de sistemas internos, sites voltados para a comunidade e aplicativos para secretarias."
            interval="2020 - 2021"
            role="Fullstack"
            :techs="['PHP', 'Flutter', 'NodeJS']"
          />
        </swiper-slide>
        <swiper-slide>
          <ExperienceCompoent
            company="Compass.UOL"
            description="Desenvolvimento e manutenção de aplicativos mobile para os clientes da consultoria."
            interval="2021 - Atual"
            role="Front-End"
            :techs="['React Native', 'Firebase', 'OCC']"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mdiSchoolOutline } from "@mdi/js";
import DegreeComponent from "../components/Degree.vue";
import SkillComponent from "../components/Skill.vue";
import ExperienceCompoent from "../components/Experience.vue";

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

export default defineComponent({
  name: "FormationSection",
  data() {
    return {
      icon: mdiSchoolOutline,
    };
  },
  components: {
    DegreeComponent,
    SkillComponent,
    ExperienceCompoent,
    Swiper,
    SwiperSlide,
  },
});
</script>
<style lang="sass" scoped>
.F-Container
  background: linear-gradient(180deg, $bg-normal 95%, $bg-light 95%)
  padding: 0 30px
  padding-right: 0
  .formation-title
    u
      text-underline-offset: 1rem
      text-decoration-thickness: .25rem
    color: $secondary
    line-height: 1.15em
    text-align: left
    padding: 68px 0 35px 0
    font-size: 4.5rem
    text-transform: uppercase
    font-family: 'Bebas Neue', cursive

  .formation-intro
    font-size: 1rem
    color: $text-alternative
    text-align: left
    span
      font-weight: bold
    padding-right: 30px
    margin-right: 30px
  .formation-degress
    padding-top: 32px
    padding-bottom: 32px
</style>
