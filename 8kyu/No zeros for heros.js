//https://www.codewars.com/kata/570a6a46455d08ff8d001002

function noBoringZeros(n) {
    while(n % 10 === 0 && n !== 0){
        n /= 10;
    }
    return n;
}
