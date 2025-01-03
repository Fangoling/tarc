interface Navbar {
  home: string;
  about: string;
  projects: string;
  impact: string;
  contact: string;
}

interface Hero {
  title: string;
  desc: string;
  'contact-button': string;
}

interface ProjectHero {
  title: string;
  desc: string;
  button: string;
}

interface ProjectServices {
  [key: string]: {
    desc: string;
    [key: string]: string | undefined; // Allow additional nested properties
  };
}

interface Project {
  hero: ProjectHero;
  services?: ProjectServices;
}

interface EmailForm {
  name: string,
  email: string,
  message: string,
  phone: string,
  address: string
}

interface Impact {
  impact: ImpactSection;
  humanity: ImpactSection;
  planet: ImpactSection;
}

interface ImpactSection {
  title: string;
  text: string;
}

export interface AppData {
  navbar: Navbar;
  hero: Hero;
  goals: string;
  projects: {
    title: string;
    subtitle: string;
    resort: Project;
    "partnering-program": Project;
    "weighted-clothing": Project;
    "social-circle": Project;
  }
  con: string;
  bottombar: {
    contact: string;
  };
  contact: EmailForm;
  impact: Impact
}

export interface Props {
  dict: AppData;
}