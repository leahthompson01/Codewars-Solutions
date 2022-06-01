
//given parameter n: an integer
//return an array  with all prime nums up to n

function primeNums(n){
const primeArr = []
let count = 0;
let isPrime = true;
for(let i=2;i<=n;i++){
    //loops from 1 to n I'm given and want to use this to find which of these nums is not prime
    isPrime = true
    for(let k=2; k<=Math.sqrt(i); k++){
        if(i%k === 0 && k !== i){
            //count of non-prime numbers in my array 
            isPrime = false
        }
    }
    if(isPrime){
        primeArr.push(i)
    }
}
// const numSet = new Set(primeArr)
    return primeArr
}
console.log(primeNums(99))

//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//want to return / [2,3,5,7,11,13,17,19]