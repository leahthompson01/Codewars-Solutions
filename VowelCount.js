// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    const vowels= /[aeiou]/gi;
    //returns str of the vowel letters that were in the original str
    return str.match(vowels) === null ? 0 : str.match(vowels).length ;
  }