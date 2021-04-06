//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
    let newArr = [...numbers];
    newArr.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return newArr;
}

// function removeSmallest(numbers) {
//     let newArr = numbers.slice(0);
//     newArr.splice(numbers.indexOf(Math.min.apply(null,numbers)),1);
//     return newArr;
// }