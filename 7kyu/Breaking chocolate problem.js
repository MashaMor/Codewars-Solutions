//https://www.codewars.com/kata/534ea96ebb17181947000ada

function breakChocolate(n,m) {
    if (n <= 0 || m <= 0) {
        return 0;
    } else {
        return n * m - 1;
    }
}
