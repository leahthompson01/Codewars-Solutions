// Create a function that returns the CSV representation of a two-dimensional numeric array.
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/javascript
function toCsvText(array) {
    //P: array         
   //R: strings for each row 
 return array.map(rowArr => rowArr.join(',')).join('\n')
 }