import { roundNumbersToOneDigit } from '@/helpers/roundNumbersToOneDigit';
import { describe, expect, it } from 'vitest';

describe('roundNumbersToOneDigit', () => {
  it('should return a string with one decimal digit when the input is a number', () => {
    const result = roundNumbersToOneDigit(3.14159);
    expect(result).toBe('3.1');
  });

  it('should return "0" when the input is null', () => {
    const result = roundNumbersToOneDigit(null);
    expect(result).toBe('0');
  });

  it('should return a string with one decimal digit when the input is a negative number', () => {
    const result = roundNumbersToOneDigit(-2.71828);
    expect(result).toBe('-2.7');
  });
});
