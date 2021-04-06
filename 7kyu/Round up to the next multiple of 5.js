//https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n){
    while (n % 5 !== 0){
        n++;
    }
    return n;
}

//v2
//function roundToNext5(n){
//   while(n % 5 !== 0) n++;
//   return n;
// }

//v3
//function roundToNext5(n){
//   return Math.ceil(n / 5) * 5;
// }