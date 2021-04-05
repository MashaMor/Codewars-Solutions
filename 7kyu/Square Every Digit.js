//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
    let n = '';
    num = String(num);
    for (let i = 0; i < num.length; i++){
        n += String(Math.pow(+num[i], 2));
    }
    return +n
}
