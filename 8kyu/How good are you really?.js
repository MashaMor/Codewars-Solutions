//https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
    let avg = 0;
    for(let i = 0; i < classPoints.length; i++){
        avg += classPoints[i];
    }
    avg /= classPoints.length;
    return yourPoints > avg;
}
