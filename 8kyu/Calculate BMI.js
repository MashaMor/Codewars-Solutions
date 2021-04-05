//https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
    let bmiCalc = weight / height ** 2;
    if(bmiCalc <= 18.5 ) {
        return 'Underweight';
    } else if(bmiCalc > 18.5 && bmiCalc <= 25.0) {
        return 'Normal';
    } else if(bmiCalc > 25.0 && bmiCalc <= 30.0) {
        return 'Overweight';
    } else {
        return 'Obese'
    }
}
