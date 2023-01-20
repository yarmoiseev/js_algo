function palindrome(str) {
  // Create regex for all non-alphanumeric characters
  // spaces and underscores
  let regex = /[^a-z0-9]/gi;
  // Input string to lower case and apply regex
  let low = str.toLowerCase().replace(regex, '');
  // Create reverse version array from low string
  let rev = [];
  for (let i = low.length - 1; i >= 0; i--) {
    rev.push(low.charAt(i))
  }
  // Join array to string and return comparassion result
  return rev.join('') === low;
}

//TESTS
console.log(palindrome('_eye')); //true
console.log(palindrome('_eye')); //true
console.log(palindrome('race car')); //true
console.log(palindrome('not a palindrome')); //false
console.log(palindrome('A man, a plan, a canal. Panama')); //true
console.log(palindrome('never odd or even')); //true
console.log(palindrome('nope')); //false
console.log(palindrome('almostomla')); //false
console.log(palindrome('My age is 0, 0 si ega ym.')); //true
console.log(palindrome('1 eye for of 1 eye.')); //false
console.log(palindrome('0_0 (: /-\ :) 0-0')); //true
console.log(palindrome('five|\_/|four')); //false