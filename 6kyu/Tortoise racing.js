//https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
    if (v2 < v1) return null;
    let seconds = Math.trunc(g / (v2 - v1) * 3600);
    let h = Math.trunc(seconds / 3600);
    let m = Math.trunc((seconds - h * 3600) / 60);
    let s = seconds - h * 3600 - m * 60;
    return [h, m, s];
}
