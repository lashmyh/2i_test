const largestDigitSum = require('./digitSum');

describe('largestDigitSum', () => {
    test('returns the largest sum of digits in a string from the input array', () => {
      const input = ["dh7js4jf", "or2rjvn2w", "h1n36mfl", "a7e6fw"];
      expect(largestDigitSum(input)).toBe(13);
    });
  
    test('returns 0 ifthere are no digits', () => {
      const input = ["abcdef", "ghijkl", "mnopqr"];
      expect(largestDigitSum(input)).toBe(0);
    });
  
    test('handles strings with multiple digits correctly', () => {
      const input = ["abc123", "4d5e6", "789"];
      // sums: 1+2+3 = 6, 4+5+6 = 15, 7+8+9 = 24
      expect(largestDigitSum(input)).toBe(24);
    });
  
    test('handles empty string array', () => {
      expect(largestDigitSum([])).toBe(0);
    });
  
    test('handles strings with only digits', () => {
      const input = ["123", "456", "789"];
      // sums: 6, 15, 24
      expect(largestDigitSum(input)).toBe(24);
    });
  
    test('handles mixture of letters, symbols and digits', () => {
      const input = ["a1!b2@", "###3", "$4%5^"];
      // sums: 3, 3, 9
      expect(largestDigitSum(input)).toBe(9);
    });
  });