//https://www.codewars.com/kata/55b1e5c4cbe09e46b3000034

function isPronic(n){
    for (i = 0; i <= n; i++){
        if((i*(i + 1)) === n) return true;
    }
    return false;
}
