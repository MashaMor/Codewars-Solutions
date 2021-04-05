//https://www.codewars.com/kata/588417e576933b0ec9000045

function seatsInTheater(nCols, nRows, col, row) {
    let a1 = nCols - col;
    let b1 = nRows - row;
    let total1 = a1 * b1;
    return b1 + (total1);
}
