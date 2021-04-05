//https://www.codewars.com/kata/5761a717780f8950ce001473

function  calculateAge(a, b) {
    if (a === b) {
        return 'You were born this very year!';
    } else if(b < a && (a - b) !== 1) {
        return `You will be born in ${a - b} years.`
    } else if(b < a && (a - b) === 1){
        return 'You will be born in 1 year.'
    } else if((b - a) === 1) {
        return 'You are 1 year old.'
    } else {
        return `You are ${b - a} years old.`
    }

}
