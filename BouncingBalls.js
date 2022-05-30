//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/javascript

function bouncingBall(h,  bounce,  window) {
    //starting velocity v0 = 0 
    //yo starting height = h which is known and in meters
    //window is 1.5 m above ground
    //b is the bounce, returning amount of height after each bounce
    //count how many times y(of t ) > window
    //starts at h=70 ft, bounce = 0.66 or (66/100)h each bounce after is h(0.6)
    let height = h;
    let count = 1;
    if(h<=window || bounce<0 || bounce>=1 || h<0){
      return -1
    }
    for(let i=1; i<=Math.ceil((bounce*h)/window)*2; i++){
      let eqn = height * bounce;
      if(eqn > window){
          count += 2;
         }
      height = eqn
    }
    return count
  }