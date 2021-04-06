//https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n){
    let sum = 0;
    let divider = 1;
    for( let i = 0; i < n; i++){
        sum = sum + 1/divider;
        divider += 3;
    }
    return sum. toFixed(2);
}

//function SeriesSum(n)
// {
//   let result = 0;
//   for (let i = 0; i < n; i++){
//     result += 1 / (i * 3 + 1);
//   }
//   return result.toFixed(2);
// }
