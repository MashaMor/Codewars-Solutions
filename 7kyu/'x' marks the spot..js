//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

const xMarksTheSpot = (input) => {
    let a, b, count = 0;
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length; j++){
            if(input[i][j] === 'x'){
                a = i, b = j;
                count++;
            }
        }
    }
    return count === 1 ? [a, b] : [];
}
