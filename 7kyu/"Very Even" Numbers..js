//

function sumOfDigits(n){
    let s = 0;
    while(n > 0){
        s += n % 10;
        n = Math.floor(n / 10);
    }
    return s;
}

function isVeryEvenNumber(n) {
    while(n >= 10){
        n = sumOfDigits(n);
    }
    return n % 2 === 0;
}

//v2
// function isVeryEvenNumber(n) {
//     while(n >= 10){
//         let s = 0;
//         while(n > 0){
//             let last = n % 10;
//             s = s + last;
//             n = Math.floor(n / 10)
//         }
//         n = s;
//     }
//     return n % 2 === 0;
// }

//v3
// function isVeryEvenNumber(n) {
//     while (String(n).length > 1){
//         n = n.toString().split('').reduce((total, num) => parseInt(total) + parseInt(num));
//     }
//     return (n % 2 < 1) ? true : false ;
// }