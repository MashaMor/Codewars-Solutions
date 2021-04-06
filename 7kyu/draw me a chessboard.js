//https://www.codewars.com/kata/56242b89689c35449b000059

function chessBoard(rows, columns) {
    let arr1 = [];
    for(let i = 0; i < rows; i++){
        let arrTemp = [];
        for(let j = 0; j < columns; j++){
            if((i + j) % 2 === 0) arrTemp.push("O")
            else arrTemp.push("X");
        }
        arr1.push(arrTemp);
    }
    return arr1;
}
