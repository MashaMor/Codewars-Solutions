//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const zero = (callback) => callback === undefined ? 0 : Math.floor(eval('0' + callback));
const one = (callback) => callback === undefined ? 1 : Math.floor(eval('1' + callback));
const two = (callback) => callback === undefined ? 2 : Math.floor(eval('2' + callback));
const three = (callback) => callback === undefined ? 3 : Math.floor(eval('3' + callback));
const four = (callback) => callback === undefined ? 4 : Math.floor(eval('4' + callback));
const five = (callback) => callback === undefined ? 5 : Math.floor(eval('5' + callback));
const six = (callback) => callback === undefined ? 6 : Math.floor(eval('6' + callback));
const seven = (callback) => callback === undefined ? 7 : Math.floor(eval('7' + callback));
const eight = (callback) => callback === undefined ? 8 : Math.floor(eval('8' + callback));
const nine = (callback) => callback === undefined ? 9 : Math.floor(eval('9' + callback));

const plus = (callback) => '+' + callback;
const minus = (callback) => '-' + callback;
const times = (callback) => '*' + callback;
const dividedBy = (callback) => '/' + callback;