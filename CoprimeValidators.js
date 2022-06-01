// https://www.codewars.com/kata/585c50e75d0930e6a7000336/javascript
// Write a program to determine if the two given numbers are coprime. A pair of numbers are coprime if their greatest shared factor is 1.

// The inputs will always be two positive integers between 2 and 99.

function isCoprime(x, y) {
    //P: two integers between 2 and 99
    //R: boolean true or false
    //E: 20 and 27; factors of 20: 1,2,4,5,10,20; factors of 27: 1,3,9,27 compare factors GCF is 1 so return true
    // P: need to check the factors for both if have anything in common besides 1 return false
    let max = Math.max(x,y)
    for(let i=2; i<= max; i++){
      if(x % i === 0 && y% i === 0){
        return false
      }
    }
    return true
    
    
  }