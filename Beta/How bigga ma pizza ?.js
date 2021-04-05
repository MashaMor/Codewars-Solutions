//https://www.codewars.com/kata/5e9c06f95ea5b30033903194

function howBiggaMaPizza(b, c) {
    let v = 4 / 3 * Math.PI * Math.pow(b/2,3), h;
    let crispy = +Math.sqrt(v / (Math.PI * 1)).toFixed(3);
    let thick = +Math.sqrt(v / (Math.PI * 5)).toFixed(4);
    return (c === 'crispy') ? crispy : thick;
}
