//https://www.codewars.com/kata/55c6126177c9441a570000cc

function orderWeight(string) {
    let weights = string.split(' ');

    return weights.sort(function(a, b) {
        let first = a.split('').reduce((x,y) => Number(x) + Number(y));
        let second = b.split('').reduce((x,y) => Number(x) + Number(y));
        return first - second === 0 ? a.localeCompare(b) : first - second;
    }).join(' ');
}
