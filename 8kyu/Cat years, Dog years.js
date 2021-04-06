//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

let humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears === 1) return [humanYears,15,15];
    if(humanYears === 2) return [humanYears,24,24];
    if(humanYears > 2) return [humanYears,(humanYears - 2)*4 + 24,(humanYears - 2)*5 + 24];
}

// let humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0;
//     let dogYears = 0;
//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 24;
//         dogYears = 24;
//     } else if (humanYears > 2) {
//         catYears = 24 + (humanYears - 2) * 4;
//         dogYears = 24 + (humanYears - 2) * 5;
//     }
//     return [humanYears, catYears, dogYears];
// }