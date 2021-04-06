//https://www.codewars.com/kata/5f7b1a82be51af00105c82bd

function divBy9(ns){
    let sum = 0;
    for (let el of ns){
        sum += +el;
    }
    return sum % 9 === 0;
}

//function divBy9(ns){
//   let sum = 0;
//   for (let i = 0; i < ns.length; i++){
//     sum += parseInt(ns[i]);
//   }
//   return !!(sum % 9 == 0);
// }
