//https://www.codewars.com/kata/5733f948d780e27df6000e33

function cutCube(volume,n){
    return (Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume/n)));
}
