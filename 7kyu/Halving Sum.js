//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

function halvingSum(n) {
    let sum = n;
    for ( let i = 1; i < n; i++){
        sum += Math.floor(n/(2**i));
    }
    return sum;
}
