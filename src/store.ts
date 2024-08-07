import { Analytics, logEvent as fbLog } from "firebase/analytics";
import { reactive } from "vue";
import { en, pt } from "./i18n";
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

interface Menu {
  projects: string;
  exp: string;
  contact: string;
}

interface Form {
  name: string;
  email: string;
  message: string;
  button: {
    sending: string;
    send: string;
  };
}

interface IContent {
  header: IHeader;
  projects: ISection;
  formation: ISection;
  skills: ISkill[];
  contact: ISection;
  footer: IFooter;
  menu: Menu;
  form: Form;
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
  setLocale(locale: "en" | "pt") {
    this.locale = locale;

    if (locale === "en") {
      return this.setContent(en);
    }

    this.setContent(pt);
  },
  locale: "en",
  projects: [] as IProject[],
  experiences: [] as IExperience[],
  formations: [] as IFormation[],
  content: {
    header: {
      description: "",
      cta: "",
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
    menu: {
      projects: "",
      exp: "",
      contact: "",
    },
    form: {
      name: "",
      email: "",
      message: "",
      button: {
        sending: "",
        send: "",
      },
    },
  } as IContent,
  loaded: true,
});
