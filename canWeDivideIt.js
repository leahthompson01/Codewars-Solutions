// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/javascript

function isDivideBy(number, a, b) {
    //P: number, a, and b are all integers
    // R: boolean true or false if number is divisible by both a and b
    //E: 12, 2, 6 => true because 12 is divisible be 2 and 6
    //P: return(number%a === 0 && number % b === 0)
    return(number%a === 0 && number % b === 0)
  }