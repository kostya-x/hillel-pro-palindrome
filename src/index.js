// eslint-disable-next-line no-magic-numbers
function palindrome(number, i = 0) {
  const result = {};
  const reverseNumber = number.toString().split('').reverse().join('');
  const originNumber = number.toString();

  i++;
  if (originNumber === reverseNumber) {
    result.isPolindrom = true;
    result.numberOfIteration = i;

    return result;
  } else {
    try {
      return palindrome(+originNumber + +reverseNumber, i++);
    } catch (error) {
      return number;
    }
  }
}