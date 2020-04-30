function palindrome(number, i = 0) {
  const result = {};
  let reverseNumber = number.toString().split('').reverse().join('')
  let originNumber = number.toString();

  i++;
  if (originNumber === reverseNumber) {
    result.isPolindrom = true;
    result.numberOfIteration = i;

    return result;
  } else {
    return palindrome(+originNumber + +reverseNumber, i++);
  }
}