//https://www.codewars.com/kata/5932c94f6aa4d1d786000028

function perfectRoots(n) {
    return !!(Number.isInteger(Math.pow(n, 1/2)) && Number.isInteger(Math.pow(n, 1/4)) && Number.isInteger(Math.pow(n, 1/8)));
}
