//https://www.codewars.com/kata/57a049e253ba33ac5e000212

function factorial(n){
    let f = 1;
    let i = 1;
    while(i <= n){
        f = f * i;
        i++;
    }
    return f;
}
