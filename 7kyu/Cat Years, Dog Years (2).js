//https://www.codewars.com/kata/5a6d3bd238f80014a2000187

const ownedCatAndDog = function(catYears, dogYears) {
    let catToHuman = catYears < 15 ? 0: catYears < 24? 1: 2 + Math.trunc((catYears - 24) / 4);
    let dogToHuman = dogYears < 15 ? 0: dogYears < 24? 1: 2 + Math.trunc((dogYears - 24) / 5);
    return [catToHuman, dogToHuman];
}
