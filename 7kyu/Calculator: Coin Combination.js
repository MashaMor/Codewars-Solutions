//https://www.codewars.com/kata/564d0490e96393fc5c000029

let coinCombo = function(c) {
    return [Math.trunc(c % 5), Math.trunc(c % 25 % 10 / 5), Math.trunc(c % 25 / 10),Math.trunc(c / 25)]
}
