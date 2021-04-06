//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    let mean = (s1 + s2 + s3) / 3;
    switch (true) {
        case mean >= 90: return 'A';
        case mean >= 80: return 'B';
        case mean >= 70: return 'C';
        case mean >= 60: return 'D';
        default: return 'F';
    }
}

// function getGrade (s1, s2, s3) {
//     let mean = (s1 + s2 + s3) / 3;
//     if(mean >= 90 && mean <= 100) return 'A';
//     if(mean >= 80 && mean < 90) return 'B';
//     if(mean >= 70 && mean < 80) return 'C';
//     if(mean >= 60 && mean < 70) return 'D';
//     if(mean >= 0 && mean < 60) return 'F';
// }
//
// function getGrade (s1, s2, s3) {
//     let mean = (s1 + s2 + s3) / 3;
//     if(mean >= 90 && mean <= 100){
//         return 'A';
//     } else if(mean >= 80 && mean < 90) {
//         return 'B';
//     } else if(mean >= 70 && mean < 80) {
//         return 'C';
//     } else if(mean >= 60 && mean < 70) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }