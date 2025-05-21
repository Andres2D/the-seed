export interface Content {
  header: Header;
  intro: Intro;
  experience: Experience[];
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
