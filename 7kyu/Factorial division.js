//https://www.codewars.com/kata/52f3a8e1f85fadcdf7001e31

function factorialDivision(n, d) {
    let prod = 1;
    for(let i = d + 1; i <= n; i++){
        prod *= i;
    }
    return prod;
}
