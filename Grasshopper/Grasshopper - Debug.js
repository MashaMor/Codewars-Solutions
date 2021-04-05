//https://www.codewars.com/kata/55cb854deb36f11f130000e1

function weatherInfo(temp) {

    function convertToCelsius() {
        let celsius = (temp - 32) * (5/9);
        return celsius;
    }

    let c = convertToCelsius();

    if (c > 0) {
        return c + " is above freezing temperature";
    } else {
        return c + " is freezing temperature";
    }
}