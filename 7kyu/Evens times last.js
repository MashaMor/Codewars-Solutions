//https://www.codewars.com/kata/5a1a9e5032b8b98477000004

function evenLast(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 2){
        sum += numbers[i];
    }
    return sum * numbers[numbers.length-1] || 0;
}
