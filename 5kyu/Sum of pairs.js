//https://www.codewars.com/kata/54d81488b981293527000c8f

function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
        if (seen.has(s - i)) return [s - i, i];
        seen.add(i);
    }
}
