function setPrecisionForDecimal(input: number, precision: number): number {
  const decimalPlaces = Math.pow(10, precision);
  const roundedNumber = Math.round(input * decimalPlaces) / decimalPlaces;

  return +roundedNumber.toFixed(precision);
}

export default setPrecisionForDecimal;
