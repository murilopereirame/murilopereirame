import { Analytics, logEvent as fbLog } from "firebase/analytics";
import { reactive } from "vue";

interface IHeader {
  description: string;
  cta: string;
}

interface ISection {
  title: string;
  intro: string;
}

interface IFooter {
  github: string;
  whatsapp: string;
  email: string;
  linkedin: string;
}

interface IContent {
  header: IHeader;
  projects: ISection;
  formation: ISection;
  skills: ISkill[];
  contact: ISection;
  footer: IFooter;
}

interface ITech {
  title: string;
}

interface IProject {
  title: string;
  year: number;
  type: string;
  techs: ITech[];
}

interface ISkill {
  title: string;
  highlight: string;
  info: string;
}

interface IExperience {
  company: string;
  description: string;
  role: string;
  start_date: Date;
  end_date?: Date;
  techs: ITech[];
}

interface IFormation {
  title: string;
  institution: string;
  degree: string;
  icon: string;
  start_date: Date;
  end_date: Date;
}

interface IAnalytics {
  instance: Analytics;
  logScreenView: (screenName: string) => void;
  logEvent: (eventName: string, params: IEventParams) => void;
}

interface IEventParams {
  eventAction: string;
  eventLabel: string;
}

export const analytics = reactive({
  logScreenView(screenName: string) {
    fbLog(this.instance, "screen_view", {
      firebase_screen: screenName,
      firebase_screen_class: "portifolio",
    });
  },
  logEvent(eventName: string, params: IEventParams) {
    fbLog(this.instance, eventName, params);
  },
  instance: {} as Analytics,
} as IAnalytics);

export const content = reactive({
  setContent(content: IContent) {
    this.content = { ...content };
  },
  setFormations(formations: IFormation[]) {
    this.formations = [...formations];
  },
  setExperiences(experiences: IExperience[]) {
    this.experiences = [...experiences];
  },
  setProjects(projects: IProject[]) {
    this.projects = [...projects];
  },
  setContentLoaded() {
    this.loaded = true;
  },
  projects: [] as IProject[],
  experiences: [] as IExperience[],
  formations: [] as IFormation[],
  content: {
    header: {
      description:
        "Realizo projetos e serviços relacionados a <span>Back-End e Front-End.</span> Participo de todas as fases de um projeto com muita dedicação. Garanto a usabilidade e execução por meio das linguagens de programação.",
      cta: "Vamos desenvolver um projeto <span>juntos</span>?",
    },
    projects: {
      title: "",
      intro: "",
    },
    formation: {
      title: "",
      intro: "",
    },
    skills: [],
    contact: {
      title: "",
      intro: "",
    },
    footer: {
      github: "",
      email: "",
      whatsapp: "",
      linkedin: "",
    },
  } as IContent,
  loaded: true,
});
