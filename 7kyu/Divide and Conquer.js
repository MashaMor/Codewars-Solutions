//https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === 'number') sum1 += x[i];
        if(typeof x[i] === 'string') sum2 += +x[i];
    }
    return sum1 - sum2;
}
