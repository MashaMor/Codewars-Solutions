//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
    if (nbPetals % 6 === 1) {
        return "I love you";
    } else if (nbPetals % 6 === 2){
        return "a little";
    } else if (nbPetals % 6 === 3){
        return "a lot";
    } else if (nbPetals % 6 === 4){
        return "passionately";
    } else if (nbPetals % 6 === 5){
        return "madly";
    } else {
        return "not at all";
    }
}
