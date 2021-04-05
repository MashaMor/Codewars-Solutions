//https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
}

// function mango(quantity, price){
//     let total = 0;
//     for (let i = 1; i <= quantity; i++){
//         if (i % 3 !== 0) total += price;
//     }
//     return total;
// }