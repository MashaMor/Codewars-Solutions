//https://www.codewars.com/kata/582c42e0f000e54a7d000086

function danspower(num, power) {
    let result = Math.pow(num, power);
    if (result % 2 === 1) result = Math.round(result / 10) * 10;
    return result;
}
