//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    if(array === null ||
        array.length === 0 ||
        array.length === 1)
        return 0;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum - min - max;
}
