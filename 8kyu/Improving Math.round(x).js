//https://www.codewars.com/kata/56be025f9347a066c7000e4f

Math.roundTo = function (number, precision) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}
