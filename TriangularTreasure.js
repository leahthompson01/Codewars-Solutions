// Return the nth triangular number
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/javascript
function triangular( n ) {
    //given n, which is number of levels for triangle, also max number of *
    //wants you to return total number of * in the triangle
    //range of numbers here is n>0 
    //used sum of natural numbers formula to find total num of * in triangle
    return n<=0 ? 0 : (n*(n+1))/2
  }