//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
    return (list.length === 0) ? 0 : Math.max(...list) - Math.min(...list);
}
