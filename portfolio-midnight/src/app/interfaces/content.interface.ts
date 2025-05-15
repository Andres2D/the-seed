export interface Content {
  header: Header;
  intro: Intro;
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
