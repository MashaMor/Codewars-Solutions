//https://www.codewars.com/kata/528e95af53dcdb40b5000171

function factorial (n) {
    let prod = 1;
    for (i = 1; i <= n; i++) {
        prod *= i;
    }
    return n >= 0 ? prod : null;
}
