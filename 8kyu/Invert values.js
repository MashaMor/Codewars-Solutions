//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++){
        arr.push(-array[i]);
    }
    return arr;
}
