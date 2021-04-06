//https://www.codewars.com/kata/583c592928a0c0449d000099

function maxAndMin(arr1, arr2) {
    arr1.sort((x, y) => x - y);
    arr2.sort((x, y) => x - y);
    const max = Math.max(Math.abs(arr1[arr1.length - 1] - arr2[0]), Math.abs(arr1[0] - arr2[arr2.length - 1]));
    let min = Infinity;
    for (let i = 0, j = 0; i < arr1.length && j < arr2.length; arr1[i] < arr2[j] ? i++ : j++) {
        const diff = Math.abs(arr1[i] - arr2[j]);
        if (diff < min) min = diff;
    }
    return [max, min];
}
