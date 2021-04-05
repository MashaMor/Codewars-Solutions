//https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
    let p = 1;
    for (let i = 0; i < power; i++){
        p *= number;
    }
    return p;
}
