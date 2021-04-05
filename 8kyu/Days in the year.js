//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f

function yearDays(year)
{
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) ? `${year} has 366 days` : `${year} has 365 days`
}
