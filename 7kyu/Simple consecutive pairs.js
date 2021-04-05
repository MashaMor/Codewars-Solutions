//https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(ar){
    let count = 0;
    for (let i = 0; i < ar.length; i += 2) {
        if (Math.abs(ar[i] - ar[i + 1]) === 1) count++;
    }
    return count;
}
