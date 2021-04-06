//https://www.codewars.com/kata/5676f07029da352ba2000065

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= num ** 0.5; i++){
        if(num % i === 0) return false;
    }
    return true;
}
const largest = (n) => {
    if(n <= 0 || typeof n !== 'number') return false;
    let number = 10 ** n - 1;
    while(!isPrime(number)) {
        number--;
    }
    return number;
}

// const largest = (n) => {
//     if (n > 0 && typeof(n) === 'number') {
//         let num = Math.pow(10, n) - 1
//         for (let i = num; i > 2; i--){
//             let p = 2;
//             while (p <= num){
//                 if (i % p === 0) break;
//                 p++;
//                 if (p === i) return i;
//             }
//         }
//     } else return false;
// }