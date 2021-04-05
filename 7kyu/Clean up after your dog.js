//https://www.codewars.com/kata/57faa6ff9610ce181b000028

function crap(x, bags, cap){
    return `${x}`.includes(`D`) ? `Dog!!` : `${x}`.split(`@`).length > bags * cap ? `Cr@p` : `Clean`;
}
