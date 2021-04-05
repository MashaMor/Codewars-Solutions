//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Math.min(...arr[i]);
    }
    return sum;
}
