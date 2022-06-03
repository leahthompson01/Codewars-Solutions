// https://www.codewars.com/kata/558fc85d8fd1938afb000014/javascript
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //P : given an array
    //R: an integer
    //E: [19,5,42,2] want to add two smallest -> return 2+5 = 7
    //P: sort the array in increasing order, add two smallest nums sortedNum[0]+sortedNum[1]
   const sortedArr = numbers.sort((a,b) => a-b)
   //now want to add the smallest nums (first two nums in sorted array)
   return sortedArr[0] + sortedArr[1]
  }