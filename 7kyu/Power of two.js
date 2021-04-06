//https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n){
    while(n > 1){
        n = n / 2;
    }
    return n === 1;
}

//v2
//function isPowerOfTwo(n){
//   return Number.isInteger(Math.log2(n));
// }

//v3
//function isPowerOfTwo(n){
//   let i = 0;
//   while(2**i < n) {
//     i++;
//   }
//   return !!(2**i === n);
// }