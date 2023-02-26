import { getAllQuotes, getRandomQuote, getQuotesByCategory } from './quotes';
import { QuoteCategory } from './quotes.types';

test('Get all quotes defined', () => {
  expect(getAllQuotes().length).toBe(6);
});

test('Get random quote', () => {
  const randomQuote = getRandomQuote();

  expect(randomQuote).toHaveProperty('quote');
  expect(randomQuote).toHaveProperty('author');
  expect(randomQuote).toHaveProperty('category');
});

test('Get quotes by category', () => {
  const quotesProgramming = getQuotesByCategory(QuoteCategory.PROGRAMMING);
  const quotesLife = getQuotesByCategory(QuoteCategory.PROGRAMMING);
  const quotesProductivity = getQuotesByCategory(QuoteCategory.PROGRAMMING);

  expect(quotesProgramming.length).toBe(2);
  expect(quotesLife.length).toBe(2);
  expect(quotesProductivity.length).toBe(2);
});
