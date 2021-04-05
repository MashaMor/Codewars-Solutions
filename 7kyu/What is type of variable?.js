//https://www.codewars.com/kata/57293671c98f77e84b000065

function type(value) {
    return {}.toString.call(value).slice(8, -1).toLowerCase();
}
