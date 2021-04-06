//https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

function reverse(n){
    let num = 0;
    while(n > 0){
        let last = n % 10;
        n = Math.trunc(n / 10);
        num = num * 10 + last;
    }
    return num;
}
