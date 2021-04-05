//https://www.codewars.com/kata/5635e7cb49adc7b54500001c

function solve(n) {
    let notes = 0;
    let arr = [500, 200, 100, 50, 20, 10]
    for (let i = 0; i < arr.length; i++){
        for (let j = arr[i]; j <= n;){
            n = n - j;
            notes++;
        }
    }
    return n % 10 !== 0? -1 : notes;
}

// function solve(n) {
//     let notes = 0;
//     if (n % 10 !== 0) return -1;
//     while (n >= 500) {n -= 500; notes++;}
//     while (n >= 200) {n -= 200; notes++;}
//     while (n >= 100) {n -= 100; notes++;}
//     while (n >= 50) {n -= 50; notes++;}
//     while (n >= 20) {n -= 20; notes++;}
//     while (n >= 10) {n -= 10; notes++;}
//     return notes;
// }