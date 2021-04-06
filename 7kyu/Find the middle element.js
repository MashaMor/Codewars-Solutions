//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

const gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] !== max && inputArray[i] !== min){
            index = i;
        }
    }
    return index;
}
