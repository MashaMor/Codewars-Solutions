//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

function sumEvenNumbers(input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] % 2 === 0 && input[i] % 1 === 0) sum += input[i];
    }
    return sum;
}
