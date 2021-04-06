//https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
    let sumOfSq = 0;
    for(let i = 0; i < numbers.length; i++){
        sumOfSq += numbers[i] ** 2;
    }
    return sumOfSq;
}
