// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/javascript
var number=function(array){
    //parameters for map(el,ind,array)
    //P: given an array of strings ['a','b','c']
    //R: return an ARRAY 
    //E : given : ['a','b','c'] return ['1: a','2: b','3: c']
    // P : want to take each original array item and add number (i+1) before it
   return array.map((item,i) =>`${i+1}: ` + item )
  }