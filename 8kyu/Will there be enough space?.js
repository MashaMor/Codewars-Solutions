//https://www.codewars.com/kata/5875b200d520904a04000003

function enough(cap, on, wait) {
    if((cap - on) >= wait) {
        return 0;
    } else {
        return Math.abs(cap - on - wait);
    }
}
