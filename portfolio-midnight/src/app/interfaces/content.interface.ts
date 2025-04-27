export interface Content {
  header: Header;
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
