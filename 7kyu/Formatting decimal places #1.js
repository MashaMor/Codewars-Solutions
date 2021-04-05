//https://www.codewars.com/kata/5641c3f809bf31f008000042

function twoDecimalPlaces(number) {
    return +number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
}
