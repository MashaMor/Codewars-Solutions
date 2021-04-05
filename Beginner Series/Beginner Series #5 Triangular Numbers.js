//https://www.codewars.com/kata/56d0a591c6c8b466ca00118b

function isTriangular(t) {
    let num = 0;
    let step = 1;
    while(num < t){
        num += step;
        step++;
    }
    return num === t;
}
