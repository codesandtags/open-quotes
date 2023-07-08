import { getAllQuotes, getRandomQuote, getQuotesByCategory } from './quotes';
import { QuoteCategory } from './quotes.types';

test('Get all quotes defined', () => {
  expect(getAllQuotes().length).toBeGreaterThan(0);
});

test('Get random quote', () => {
  const randomQuote = getRandomQuote();

  expect(randomQuote).toHaveProperty('quote');
  expect(randomQuote).toHaveProperty('categories');
  expect(randomQuote.author).toHaveProperty('name');
  expect(randomQuote.author).toHaveProperty('link');
  expect(randomQuote.author).toHaveProperty('profileImage');
  expect(randomQuote).toHaveProperty('categories');
});

test('Get quotes by category', () => {
  const quotesProgramming = getQuotesByCategory(QuoteCategory.PROGRAMMING);
  const quotesLife = getQuotesByCategory(QuoteCategory.LIFE);
  const quotesProductivity = getQuotesByCategory(QuoteCategory.PRODUCTIVITY);
  const quoteSoftwareArchiteture = getQuotesByCategory(
    QuoteCategory.SOFTWARE_ARCHITECTURE
  );

  expect(quotesProgramming.length).toBeGreaterThan(0);
  expect(quotesLife.length).toBeGreaterThan(0);
  expect(quotesProductivity.length).toBeGreaterThan(0);
  expect(quoteSoftwareArchiteture.length).toBeGreaterThan(0);
});
