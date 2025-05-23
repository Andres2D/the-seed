export interface Content {
  header: Header;
  intro: Intro;
  experience: Experience[];
  skillsCategories: SkillsCategory[];
}

export interface Header {
  presentation: string;
  name: string;
  complement: string;
  button?: CallToAction;
  link?: CallToAction;
}

export interface CallToAction {
  label: string;
  type: 'button' | 'link';
  href?: string;
}

export interface Intro {
  image: string;
  description: string;
}

export interface Experience {
  key: string;
  title: string;
  place: string;
  description: string;
  initialDate: string;
  endDate?: string;
  placeLink?: string;
  icon?: 'job' | 'education';
}

export interface SkillsCategory {
  key: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  key: string;
  title: string;
  image: any;
  color: string;
}
