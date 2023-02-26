export enum QuoteCategory {
  PROGRAMMING = 'programming',
  PRODUCTIVITY = 'productivity',
  LIFE = 'life',
}

export interface Quote {
  quote: string;
  author: string;
  category: QuoteCategory;
}
