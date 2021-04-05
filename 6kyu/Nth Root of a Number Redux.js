//https://www.codewars.com/kata/552679ea44a9e400b600124f

let root = (x, n) => n % 2 === 1 && x < 0 ? -(Math.abs(x) ** (1/n)) : x ** (1/n);
