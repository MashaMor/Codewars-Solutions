//https://www.codewars.com/kata/5890d8bc9f0f422cf200006b

function excludingVatPrice(price){
    if (price === null) return -1;
    let result = price / 1.15;
    return +result.toFixed(2);
}
