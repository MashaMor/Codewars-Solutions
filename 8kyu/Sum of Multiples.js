//https://www.codewars.com/kata/57241e0f440cd279b5000829

function sumMul(n,m){
    let sum = 0;
    if (n < m){
        for (let i = n; i < m; i = i + n){
            sum = sum + i;
        }
        return sum;
    } else {
        return 'INVALID';
    }
}
