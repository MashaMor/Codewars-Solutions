//https://www.codewars.com/kata/5865cff66b5699883f0001aa

function toTime(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds - h * 3600) / 60);
    return h + ' hour(s) and ' + m + ' minute(s)';
}
