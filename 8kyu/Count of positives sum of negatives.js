//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    if(!Array.isArray(input) || input.length === 0) return [];
    let count = 0;
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i] > 0) count++;
        else sum += input[i];
    }
    return [count, sum];
}
