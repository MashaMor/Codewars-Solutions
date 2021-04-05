//https://www.codewars.com/kata/558f9f51e85b46e9fa000025

function differenceOfSquares(n){
    let sqrSum = 0;
    let sumSqr = 0;
    let i= 0;
    while(i <= n){
        sqrSum += i;
        sumSqr += i**2;
        i++;
    }
    return Math.abs(sumSqr - sqrSum**2);
}
