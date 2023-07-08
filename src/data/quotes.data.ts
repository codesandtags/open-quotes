import { Quote, QuoteCategory } from '../quotes/quotes.types';

export const quoteList: Quote[] = [
  {
    quote: 'Time is what we want most, but what we use worst.',
    author: {
      name: 'William Penn',
      link: 'https://en.wikipedia.org/wiki/William_Penn',
      profileImage: 'https://en.wikipedia.org/wiki/File:WilliamPenn.jpg',
    },
    categories: [QuoteCategory.PRODUCTIVITY],
  },
  {
    quote:
      'Everything in software architecture is a trade-off. First law of Software Architecture.',
    author: {
      name: 'Fundamentals of Software Architecture',
      link: 'https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/',
      profileImage: 'https://learning.oreilly.com/library/cover/9781492043447/250w/',
    },
    categories: [QuoteCategory.SOFTWARE_ARCHITECTURE],
  },
  {
    quote: 'A person who never made a mistake never tried anything new.',
    author: {
      name: 'Albert Einstein',
      link: 'https://en.wikipedia.org/wiki/Albert_Einstein',
      profileImage: 'https://en.wikipedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    },
    categories: [QuoteCategory.LIFE],
  },
  {
    quote:
      'Why is most important than how. Second law of software Architecture.',
    author: {
      name: 'Fundamentals of Software Architecture',
      link: 'https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/',
      profileImage: 'https://learning.oreilly.com/library/cover/9781492043447/250w/',
    },
    categories: [QuoteCategory.SOFTWARE_ARCHITECTURE],
  },
  {
    quote: 'Imagination is more important than knowledge.',
    author: {
      name: 'Albert Einstein',
      link: 'https://en.wikipedia.org/wiki/Albert_Einstein',
      profileImage: 'https://en.wikipedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
    },
    categories: [QuoteCategory.LIFE],
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: {
      name: 'Steve Jobs',
      link: 'https://en.wikipedia.org/wiki/Steve_Jobs',
      profileImage: 'https://en.wikipedia.org/wiki/File:Steve_Jobs_with_red_shawl_edit2.jpg',
    },
    categories: [QuoteCategory.LIFE],
  },
  {
    quote: 'First, solve the problem. Then, write the code',
    author: {
      name: 'John Johnson',
      link: 'https://twitter.com/CodeWisdom/status/1427201018090164225?lang=en',
      profileImage: 'no-image',
    },
    categories: [QuoteCategory.PROGRAMMING],
  },
  {
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: {
      name: 'Martin Fowler',
      link: 'https://github.com/martinfowler',
      profileImage: 'https://avatars.githubusercontent.com/u/120859?v=4',
    },
    categories: [QuoteCategory.PROGRAMMING],
  },
  {
    quote: 'First do it, then do it right, then do it better.',
    author: {
      name: 'Addy Osmani',
      link: 'https://github.com/addyosmani',
      profileImage: 'https://avatars.githubusercontent.com/u/110953?v=4',
    },
    categories: [QuoteCategory.PROGRAMMING],
  }
];
