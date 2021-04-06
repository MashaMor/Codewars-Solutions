//https://www.codewars.com/kata/596549c7743cf369b900021b

function isPrime(n){
    if (n <= 1) return false;
    for(let i = 2; i <= Math.round(n ** 0.5); i++){
        if (n % i === 0) return false;
    }
    return true;
}

function twinPrime(n) {
    let count = 0;
    for(let i = 1; i < n; i++){
        if (isPrime(i) && isPrime(i + 2)) {count++;}
    }
    return count;
}
