//https://www.codewars.com/kata/56b29582461215098d00000f

function pipeFix(numbers){
    let arr = [];
    for (let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
        arr.push(i);
    }
    return arr;
}
