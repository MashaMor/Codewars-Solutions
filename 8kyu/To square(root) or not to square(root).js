//https://www.codewars.com/kata/57f6ad55cca6e045d2000627

function squareOrSquareRoot(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++){
        if (Number.isInteger(Math.sqrt(array[i]))) arr.push(Math.sqrt(array[i]));
        else arr.push(Math.pow(array[i], 2));
    }
    return arr;
}
