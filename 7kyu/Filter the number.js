//https://www.codewars.com/kata/55b051fac50a3292a9000025

let FilterString = function(value) {
    let result = '';
    for (let i = 0; i < value.length; i++){
        if (!isNaN(value[i]))
            result += value[i];
    }
    return +result;
}
