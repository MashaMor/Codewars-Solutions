//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array){
    let arr = [0, 0];
    for(let i = 0; i < array.length; i++) {
        if(i % 2 == 0) arr[0] += array[i];
        else arr[1] += array[i];
    }
    return arr;
}
