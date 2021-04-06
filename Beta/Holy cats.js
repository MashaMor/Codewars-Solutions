//https://www.codewars.com/kata/58ebfa6ef7cda1a3d4000048

function holycats(input){
    let cats = [];
    for(let i = 0 ; i < input.length; i++){
        if(input[i] !== 'wicked' && input[i] !== 'normal'){
            cats.push(input[i]);
        }
    }
    return cats;
}

//function holycats(input){
//   let cats = [];
//   for(let i = 0; i < input.length; i++){
//     if(input[i] !== 'wicked' && input[i] !== 'normal'){
//       cats.push(input[i]);
//     }
//   }
//   return cats;
// }
