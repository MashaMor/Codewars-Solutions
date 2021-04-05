//https://www.codewars.com/kata/56606694ec01347ce800001b

function isTriangle(a,b,c) {
    return !!(a < (b + c) && b < (a + c) && c < (a + b));
}
