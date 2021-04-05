//https://www.codewars.com/kata/5dd259444228280032b1ed2a

function solve(s, g){
    return s % g ? -1 : [g, s - g];
}
