/*Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.
*/

function nbDig(n, d) {
  let num = 0
  let squared = ''
  let count = 0
  for (let i=0; i<=n; i++){
    num = i
    let square = Math.pow(num,2)
    squared += square
  }
  let arrSquared = squared.split('')
  arrSquared.forEach(x =>{
    if (Number(x) === d){
      count += 1
    }
  })
  
  return count
  
}

// Who Likes It
function likes(names) {
  let str = ''
  if(!names.length){
    return 'no one likes this'
  } else if(names.length >= 4){
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  } else if (names.length === 1){
     return `${names[0]} likes this`
  }
  else {
    if(names.length === 2){
      for (let i=0; i<names.length-1; i++)
       str += `${names[i]}`
    } else {
    str += `${names[0]}, ${names[1]}`
  }
  return str+= ` and ${names[names.length-1]} like this`
}
}