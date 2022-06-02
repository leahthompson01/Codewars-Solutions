// https://www.codewars.com/kata/526233aefd4764272800036f/javascript

function matrixAddition(a, b){
    //   P: two arrays (they're square matrices have same number of rows and columns)
     // R: one array that is the sum of the two arrays I was given
      //E: [[1,2],[2,3]] + [[1,1][2,3]] = [[2,3],[4,6,]]
      // P: need to go through my arrays, get each individual row a[0], b[0] that would give me [a0,a1] [b0,b1]
      //know they're square so I have same num of rows and columns so number of rows I have is the same num
      //of elements in each one
      let sumArr = a.map(a => a)
      
      for(let row=0; row<a.length; row++){
          
        for(let column=0; column<a.length; column++){
          
          sumArr[row][column] = a[row][column] + b[row][column]
          
        } 
      }
      return sumArr
    }