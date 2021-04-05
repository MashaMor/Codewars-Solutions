//https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    return games.reduce((output,current)=>{
        let x = parseInt(current[0]);
        let y = parseInt(current[2]);
        let value = x > y ? 3 : x === y ? 1 : 0;
        return output + value;
    }, 0)
}
