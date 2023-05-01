function convertToPersianNumber(input: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let output = '';
  typeof input === 'number' ? (input = input.toString()) : '';
  for (let i = 0; i < input.length; i++) {
    if (/\d/.test(input[i])) {
      output += persianDigits[parseInt(input[i])];
    } else {
      output += input[i];
    }
  }
  return output;
}

function convertToEnglishNumber(num: string): string {
  let farsiNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let engNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < farsiNums.length; i++) {
    num = num.replace(new RegExp(farsiNums[i], 'g'), engNums[i]);
  }
  return num;
}

function separateNumbers(input: string | number): string {
  typeof input === 'number' ? (input = input.toString()) : '';
  const isPersian = isPersianNumber(input);
  isPersian ? (input = convertToEnglishNumber(input)) : '';
  const regex = /\d{1,3}(?=(\d{3})+(?!\d))/g;
  let result = input.replace(regex, '$&,');
  return isPersian ? convertToPersianNumber(result) : result;
}

function isPersianNumber(input: string): boolean {
  const persianDigits = /^[\u06F0-\u06F9]+$/;
  return persianDigits.test(input);
}

export {
  convertToPersianNumber,
  separateNumbers,
  convertToEnglishNumber,
  isPersianNumber,
};
