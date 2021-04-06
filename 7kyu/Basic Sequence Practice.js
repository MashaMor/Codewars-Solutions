//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

function sumOfN(n) {
    let arr = [0]
    let sum = 0;
    for(let i = 1; i <= Math.abs(n); i++){
        sum += i;
        arr.push(n > 0 ? sum : -sum);
    }
    return arr;
}
