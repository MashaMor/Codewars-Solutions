//https://www.codewars.com/kata/580878d5d27b84b64c000b51

function sumTriangularNumbers(n) {
    if (n <= 0) return 0;
    let sum = 0;
    for (let i = 1;i <= n; i++){
        sum += (i*(i+1))/2;
    }
    return sum;
}
