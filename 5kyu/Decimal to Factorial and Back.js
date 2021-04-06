//https://www.codewars.com/kata/54e320dcebe1e583250008fd

function dec2FactString(nb) {
    let result = [0];
    let i = 2;
    while (nb > 0) {
        result.push((nb % i).toString(16).toUpperCase());
        nb = Math.floor(nb / i++);
    }
    return result.reverse().join('');
}
function factString2Dec(str) {
    let radix = 1;
    let result = 0;
    let factorial = radix;
    for(let c of str.split('').slice(0, -1).reverse()) {
        result += (parseInt(c, 16) * factorial);
        factorial *= ++radix;
    }
    return result;
}
