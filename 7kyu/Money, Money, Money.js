//https://www.codewars.com/kata/563f037412e5ada593000114

function calculateYears(p, i, t, d) {
    let income = p;
    let years = 0;
    while (income < d){
        income += (income * i - (income * i * t));
        years++;
    }
    return years;
}
