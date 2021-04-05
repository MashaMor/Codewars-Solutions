//https://www.codewars.com/kata/55a75e2d0803fea18f00009d

function slope([a, b, c, d]){
    let m = (d - b) / (c - a);
    if (c - a === 0) {
        return 'undefined';
    } else {
        return String(m);
    }
}
