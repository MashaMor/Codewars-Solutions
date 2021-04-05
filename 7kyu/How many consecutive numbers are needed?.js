//https://www.codewars.com/kata/559cc2d2b802a5c94700000c

function consecutive(arr) {
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}
