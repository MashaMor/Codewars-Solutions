//https://www.codewars.com/kata/5748838ce2fab90b86001b1a

function squareArea(A){
    // 4A=2piR
    let R = (4 * A) / (2 * Math.PI);
    return +(R ** 2).toFixed(2);
}
