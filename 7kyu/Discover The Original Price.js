//https://www.codewars.com/kata/552564a82142d701f5001228

function discoverOriginalPrice(discountedPrice, salePercentage){
    let d = 100 - salePercentage;
    let price = discountedPrice * 100 / d;
    return +price.toFixed(2);
}
