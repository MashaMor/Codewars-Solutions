//https://www.codewars.com/kata/5f5daf1a209a64001183af9b

function makeChocolates(small, big, goal) {
    for (let b = big; b >= 0; b--){
        let s = goal - (5 * b);
        if (s % 2 === 0 && s / 2 <= small && goal >= (5 * b)) {
            return s/2;
            break;
        }
    }
    return -1;
}

// function makeChocolates(small, big, goal) {
//     for (let i = big; i >= 0; i--){
//         for (let j = small; j >= 0; j--){
//             if ((i * 5 + j * 2) === goal) return j;
//         }
//     }
//     return -1;
// }