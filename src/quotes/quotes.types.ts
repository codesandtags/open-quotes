export enum QuoteCategory {
  SOFTWARE_ARCHITECTURE = 'Software Architecture',
  PROGRAMMING = 'Programming',
  PRODUCTIVITY = 'Productivity',
  LIFE = 'Life',
}

export interface Quote {
  quote: string;
  author: {
    name: string;
    link: string;
    profileImage: string;
  };
  categories: QuoteCategory[];
}
