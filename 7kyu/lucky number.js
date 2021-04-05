//https://www.codewars.com/kata/55afed09237df73343000042

function isLucky(n) {
    let sum = 0;
    n += '';
    for(let i = 0; i < n.length; i++){
        sum += +n[i];
    }
    return sum % 9 === 0;
}

// function isLucky(n) {
//     let sum = 0;
//     let str = String(n);
//     for(let i = 0; i < str.length; i++){
//         sum += +str[i];
//     }
//     if(sum === 0 || sum %  9 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }