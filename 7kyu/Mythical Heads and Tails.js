//https://www.codewars.com/kata/5751aa92f2dac7695d000fb0

function beasts(heads, tails){
    for(let i = 0; i <= tails; i++){
        for(let j = 0; j <= tails; j++){
            if(i + j === tails && 2 * i + 5 * j === heads)
                return [i, j];
        }
    }
    return "No solutions";
}
