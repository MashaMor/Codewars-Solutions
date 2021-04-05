//https://www.codewars.com/kata/57b58827d2a31c57720012e8

function fuelPrice(litres, pricePerLitre) {
    if(litres >= 2 && litres < 4) {
        return +(litres * (pricePerLitre - 0.05)).toFixed(2);
    } else if(litres >= 4 && litres < 6) {
        return +(litres * (pricePerLitre - 0.1)).toFixed(2);
    } else if(litres >= 6 && litres < 8) {
        return +(litres * (pricePerLitre - 0.15)).toFixed(2);
    } else if(litres >= 8 && litres < 10) {
        return +(litres * (pricePerLitre - 0.2)).toFixed(2);
    } else if(litres >= 10) {
        return +(litres * (pricePerLitre - 0.25)).toFixed(2);
    } else {
        return +(litres * pricePerLitre).toFixed(2);
    }
}
