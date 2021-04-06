//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7

function squaresNeeded(grains){
    let squares = 0;
    let sum = 0;
    let grainsInSq = 1;
    while(sum < grains){
        sum += grainsInSq;
        grainsInSq *= 2;
        squares++;
    }
    return squares;
}
