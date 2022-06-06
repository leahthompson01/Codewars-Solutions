// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/javascript
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.


function century(year) {
    //P: given an integer to represent the year
    //R: integer to represent what century that year is in
    //E: 1705 => 18
    //P: return year % 100 !== 0 ? Math.ceil(year/100) : year/100
   return year % 100 !== 0 ? Math.ceil(year/100) : year/100
  }