//https://www.codewars.com/kata/5546180ca783b6d2d5000062

function squares(x, n) {
    let arr = [x];
    if (n <= 0) return [];
    for (let i = 1; i < n; i++){
        x = Math.pow(x, 2);
        arr.push(x);
    }
    return arr;
}
