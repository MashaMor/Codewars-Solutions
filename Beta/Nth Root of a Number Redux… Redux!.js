//https://www.codewars.com/kata/5526a3e41d58a2e980001073

let root = (x, n) => n % 2 === 1 && x < 0 ? -(Math.abs(x) ** (1/n)) : x ** (1/n);
