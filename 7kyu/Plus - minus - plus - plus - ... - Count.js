//https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

const catchSignChange = arr => arr.slice(1).filter((e, i) => (e < 0)!==(arr[i] < 0)).length;
