import { quoteList } from './quotes.data';
import { Quote, QuoteCategory } from './quotes.types';

export const getAllQuotes = (): Quote[] => {
  return quoteList;
};

export const getRandomQuote = (): Quote => {
  const quotes = getAllQuotes();
  const totalQuotes = quotes.length;
  const randomIndex = Math.floor(Math.random() * totalQuotes);

  return quotes[randomIndex];
};

export const getQuotesByCategory = (category: QuoteCategory): Quote[] => {
  return getAllQuotes().filter((quote) => quote.category === category);
};
