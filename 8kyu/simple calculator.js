//https://www.codewars.com/kata/5810085c533d69f4980001cf

function calculator(a,b,sign) {
    switch (sign) {
        case '+' :
            return (a !== NaN && b !== NaN) ? a + b : "unknown value";
        case '-' :
            return (a !== NaN && b !== NaN) ? a - b : "unknown value";
        case '*' :
            return (a !== NaN && b !== NaN) ? a * b : "unknown value";
        case '/' :
            return (a !== NaN && b !== NaN) ? a / b : "unknown value";
        default :
            return "unknown value";
    }
}
