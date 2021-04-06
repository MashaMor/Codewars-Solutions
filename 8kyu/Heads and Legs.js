//https://www.codewars.com/kata/574c5075d27783851800169e

function animals(heads, legs) {
    let cows = (legs - 2 * heads) / 2;
    let chickens = heads - cows;
    if (chickens >= 0 && cows >= 0 && chickens % 1 === 0 && cows % 1 === 0)
        return [chickens, cows];
    else return "No solutions";
}

// v2
// function animals(heads, legs){
//     for (let i = 0; i <= heads; i++){
//         if ((i * 4 + (heads - i) * 2) === legs){
//             return [heads- i,i];
//         }
//     }
//     return 'No solutions';
// }

// v3
// function animals(heads, legs){
//     let result = "No solutions";
//     for (let i = 0; i <= heads; i++){
//         for (let j = 0; j <= heads; j++){
//             if (i + j === heads && i * 4 + j * 2 === legs){
//                 result = [j, i];
//                 break;
//             }
//         }
//     }
//     return result
// }