// https://www.codewars.com/kata/55908aad6620c066bc00002a/javascript
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    //gives me an array of elements
      const arr = str.split('')
      let xCount = 0;
      let oCount = 0;
      //loop through arr
      arr.forEach(el => {
        //the check to see if x or o needs to be case insensitive
        if(el.toLowerCase() === 'x'){
          xCount++
        }else if(el.toLowerCase() === 'o'){
          oCount++
        }
      })
      return xCount === oCount
  }