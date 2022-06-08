// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
    //P: a,b are arrays. A is like original array, and b is elements we want to check for
    //R: want to return an array that has all original elements not including the ones in b
    //HAVE TO KEEP ORDER
    //E: arrayDiff([1,2],[2]) => [1]
    //P:Want to look in array a and grab elements that are not in b
    
    const diffArr = []
    //first for loop is to iterate over array A
    for(let i=0; i<a.length;i++){
      //checks to see if a[i] is in list b, even once
      if(!b.includes(a[i])){
        diffArr.push(a[i])
      }
      }
    return b.length ? diffArr : a
    
  }