//https://www.codewars.com/kata/5865a28fa5f191d35f0000f8

function takeUmbrella(weather, chance) {
    return weather === 'rainy'
        || weather === 'cloudy' && chance > 0.2
        || chance > 0.5;
}
