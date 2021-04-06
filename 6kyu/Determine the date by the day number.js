//https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

function getDay(day, isLeap) {
    let days = [31,28+isLeap,31,30,31,30,31,31,30,31,30,31];
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November', 'December'];
    for (let i = 0; i < days.length; i++) {
        if (day <= days[i]) return `${month[i]}, ${day}`;
        else day -= days[i];
    }
}
