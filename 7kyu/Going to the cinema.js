//https://www.codewars.com/kata/562f91ff6a8b77dfe900006e

function movie(card, ticket, perc) {
    let sum= 0;
    let count = 0;
    while (Math.ceil(card) >= sum) {
        sum += ticket;
        card += ticket * Math.pow(perc, ++count);
    }
    return count;
}
