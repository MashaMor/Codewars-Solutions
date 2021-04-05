//https://www.codewars.com/kata/56368f37d464c0a43c00007f

var calculate = function calculate(a, o, b) {

    if(o === "+") {
        return a + b;
    } else if(o === "-") {
        return a - b;
    } else if(o === "/" && b !== 0) {
        return a / b;
    } else if(o === "*") {
        return a * b;
    } else {
        return null;
    }
}
