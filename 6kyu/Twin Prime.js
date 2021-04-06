//https://www.codewars.com/kata/59b7ae14bf10a402d40000f3

function isPrime(n){
    if (n <= 1) return false;
    for(let i = 2; i <= Math.round(n ** 0.5); i++){
        if(n % i === 0) return false;
    }
    return true;
}

function isTwinPrime(n){
    return isPrime(n) && (isPrime(n + 2) || isPrime(n - 2));
}
