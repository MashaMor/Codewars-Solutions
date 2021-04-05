//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

function expressionMatter(a, b, c) {
    let d = a + b + c;
    let f = a * b * c;
    let e = c * b + a;
    let g = a * b + c;
    let h = a * c + b;
    let i = c * (b + a);
    let j = a * (b + c);
    let k = a * (c + b);

    return Math.max(d, f, e, g, h, i, j, k);
}
