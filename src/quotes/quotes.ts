import { quoteList } from '../data/quotes.data';
import { Quote, QuoteCategory } from './quotes.types';

/**
 * Get all quotes
 * @returns
 */
export const getAllQuotes = (): Quote[] => {
  return quoteList;
};

/**
 * Get a random quote from the list of quotes
 * @returns
 */
export const getRandomQuote = (): Quote => {
  const quotes = getAllQuotes();
  const totalQuotes = quotes.length;
  const randomIndex = Math.floor(Math.random() * totalQuotes);

  return quotes[randomIndex];
};

/**
 * Get a random quote from the list of quotes by category
 * @param category
 * @returns
 */
export const getQuotesByCategory = (category: QuoteCategory): Quote[] => {
  return getAllQuotes().filter(
    (quote) =>
      quote.categories.filter((quoteCategory) => quoteCategory === category)
        .length > 0
  );
};
