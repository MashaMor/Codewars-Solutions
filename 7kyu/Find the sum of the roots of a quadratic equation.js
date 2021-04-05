//https://www.codewars.com/kata/57d448c6ba30875437000138

function roots(a,b,c){
    let d = b**2 - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    let sum = x1 + x2;
    if(d < 0) return null;
    else return +sum.toFixed(2);
}
