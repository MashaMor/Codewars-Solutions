//https://www.codewars.com/kata/57d814e4950d8489720008db

function index(array, n){
    return (array[n] === undefined) ? -1 : Math.pow(array[n], n);
}
