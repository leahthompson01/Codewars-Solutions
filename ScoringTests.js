//returns the test score
// https://www.codewars.com/kata/55d2aee99f30dbbf8b000001/javascript
function scoreTest(str, right, omit, wrong){
    //P : given test card, points for right answers, ommitted, wrong
    // R: return a number (sum of test grade)
    //E: [0,0,0,2,1,0]2,0,1 => 2(4) + 1(0) - 1(1) = 9
    //P: check to see if what each num in str array is, if === 0 add right points, === 1 add ommited points, if ===2 subt
    // wrong points. Return sum of all the points
    let sum = 0
    str.forEach(num => {
      if(num === 2){
        sum -= wrong
      }else{
        num === 0 ? sum += right : sum += omit
      }
    })
    return sum
  }