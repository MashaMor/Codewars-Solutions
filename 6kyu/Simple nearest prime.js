//https://www.codewars.com/kata/5a9078e24a6b340b340000b8

function isPrime(n){
    if( n <= 1) return false;
    for(let i = 2; i <= Math.round(n ** 0.5); i++){
        if(n % i === 0) return false;
    }
    return true;
}

function solve(n){
    let x = n;
    let y = n;
    while (!isPrime(x) && !isPrime(y)){
        x--;
        y++;
    }
    return isPrime(x) ? x : y;
}
