//https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0) sum += arr[i];
    }
    return sum;
}
