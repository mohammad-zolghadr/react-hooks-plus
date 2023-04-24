function useRandomNumber() {
  return Math.floor(Math.random() * 10000);
}

function useRandomNumberDigit(numDigits: number): number {
  const max = Math.pow(10, numDigits) - 1;
  const min = Math.pow(10, numDigits - 1);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function useRandomNumberRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function useRandomNumberEven(
  isEven: boolean,
  min: number,
  max: number
): number {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (isEven && randomNum % 2 !== 0) randomNum++;
  else if (!isEven && randomNum % 2 === 0) randomNum++;

  return randomNum;
}

function useRandomString(): string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function useRandomStringLength(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export {
  useRandomNumber,
  useRandomNumberDigit,
  useRandomNumberRange,
  useRandomNumberEven,
  useRandomString,
  useRandomStringLength,
};
