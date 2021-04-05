//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1

function getAges(sum,difference){
    let a = (sum + difference)/2;
    let b = sum - a;
    if(sum < 0 || difference < 0 || a < 0 || b < 0) {
        return null;
    } else {
        return [a, b];
    }
}
