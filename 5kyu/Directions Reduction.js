//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
    let opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
    return arr.reduce(function (a, b, i) {
        opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
        return a
    }, [])
}
