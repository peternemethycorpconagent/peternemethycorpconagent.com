interface Frontmatter {
  date: string;
  title: string;
  category: string;
  template: string;
  description?: string;
  tags?: Array<string>;
  socialImage?: string;
  video?: string;
}

export default Frontmatter;
