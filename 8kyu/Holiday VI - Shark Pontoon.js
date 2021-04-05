//https://www.codewars.com/kata/57e921d8b36340f1fd000059


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin === true) {
        sharkSpeed /= 2;
    }
    return (pontoonDistance / youSpeed) < (sharkDistance / sharkSpeed) ? 'Alive!': 'Shark Bait!';
}
