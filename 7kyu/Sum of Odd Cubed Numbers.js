//https://www.codewars.com/kata/580dda86c40fa6c45f00028a

function cubeOdd(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number') return undefined;
        if(arr[i] % 2 !== 0) sum += arr[i] ** 3;
    }
    return sum;
}
