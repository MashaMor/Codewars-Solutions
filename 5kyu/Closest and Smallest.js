//https://www.codewars.com/kata/5868b2de442e3fb2bb000119

function closest(strng) {
    const weight = (n) => n.split('').reduce((acc, el) => acc + +el, 0);
    const arr = strng.split(' ').map((el, indx) =>
        [weight(el), indx, +el]).sort((a, b) =>
        a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    let result = [];
    let min = Infinity;
    for(let i = 0; i < arr.length - 1; ++i) {
        if (arr[i + 1][0] - arr[i][0] < min) {
            min = arr[i + 1][0] - arr[i][0];
            result = [arr[i], arr[i + 1]];
        }
    }
    return result;
}
