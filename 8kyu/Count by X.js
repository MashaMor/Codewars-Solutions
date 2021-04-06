//https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(x * i);
    }
    return arr;
}
