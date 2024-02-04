export const roundNumbersToOneDigit = (value: number | null) => {
  if (!value) return '0';
  return value.toFixed(1);
};
