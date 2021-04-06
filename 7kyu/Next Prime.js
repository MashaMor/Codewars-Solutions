//https://www.codewars.com/kata/58e230e5e24dde0996000070

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= (num ** 0.5); i++){
        if(num % i === 0) return false;;
    }
    return true;
}

function nextPrime(n){
    n++;
    while(!isPrime(n)){
        n++;
    }
    return n;
}

// function nextPrime(n){
//     let i = n + 1;
//     while(!isPrime(i)) i++;
//     return n >= 2 ? i : 2;
// }
// function isPrime(n){
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i == 0)
//             return false
//     }
//     return true;
// }