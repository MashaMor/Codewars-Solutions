//https://www.codewars.com/kata/5830e7feff1a3ce8d4000062

function elipse(a, b) {
    let area = Math.round(Math.PI * a * b * 10) / 10;
    let perimeter = Math.round(Math.PI * ((3 / 2) * (a + b) - Math.sqrt(a * b)) * 10) / 10;
    return 'Area: ' + area.toFixed(1) + ', perimeter: ' + perimeter.toFixed(1);
}
