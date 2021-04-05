//https://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month){
    let days;
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11: days = 30;
            break;
        case 2: days = 28;
    }
    return days;
}
