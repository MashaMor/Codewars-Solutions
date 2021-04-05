//https://www.codewars.com/kata/564f458b4d75e24fc9000041

function remainder (D, d){
    while(D >= d) {
        D -= d;
    }
    return D;
}
