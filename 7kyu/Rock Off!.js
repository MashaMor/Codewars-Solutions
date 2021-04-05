//https://www.codewars.com/kata/5b097da6c3323ac067000036

function solve(a, b) {
    let rateA = 0;
    let rateB = 0
    for( let i = 0; i < a.length; i++){
        if(a[i] > b[i]) rateA++;
        if(b[i] > a[i]) rateB++;
    }
    if(rateA === rateB) return `${rateA}, ${rateB}: that looks like a "draw"! Rock on!`;
    if(rateA > rateB) return `${rateA}, ${rateB}: Alice made "Kurt" proud!`;
    if(rateA < rateB) return`${rateA}, ${rateB}: Bob made "Jeff" proud!`;
}
