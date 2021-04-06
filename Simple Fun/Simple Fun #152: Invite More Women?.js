//https://www.codewars.com/kata/58acfe4ae0201e1708000075

function inviteMoreWomen(L) {
    let countWomen = 0;
    let countMen = 0;
    for(let i = 0; i < L.length; i++){
        L[i] === 1 ? countMen++ : countWomen++;
    }
    return countWomen < countMen;
}
