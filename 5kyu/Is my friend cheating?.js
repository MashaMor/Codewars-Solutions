//https://www.codewars.com/kata/5547cc7dcad755e480000004

function removeNb (n) {
    let results = [];
    for (let a = 1; a <= n; a++) {
        let b = (n * (n + 1) / 2 - a) / (a + 1);
        if (b % 1 === 0 && b <= n) results.push([a, b]);
    }
    return results;
}
