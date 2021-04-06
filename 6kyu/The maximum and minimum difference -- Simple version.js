//https://www.codewars.com/kata/583c5469977933319f000403

function maxAndMin(arr1,arr2){
    return [Math.max(...arr1.map(x => Math.max(...arr2.map(y => Math.abs(x - y))))),
        Math.min(...arr1.map(x => Math.min(...arr2.map(y => Math.abs(x - y)))))]
}
