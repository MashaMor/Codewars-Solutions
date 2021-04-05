//https://www.codewars.com/kata/5e030f77cec18900322c535d

function minimum(a, x) {
    let r = a % x;
    return Math.min(r, x-r);
}
