//https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound){
    let n = bound % divisor;
    return bound-n;
}
