//https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
        if(arrayOfSheep[i] === true) count++;
    }
    return count;
}
