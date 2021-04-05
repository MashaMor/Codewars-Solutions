//https://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
    return (n >= 10) ? n * 90 : (n >= 5 && n < 10) ? n * 95 : n * 100;
}
