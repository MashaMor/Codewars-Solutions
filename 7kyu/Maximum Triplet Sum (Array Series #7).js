//https://www.codewars.com/kata/5aa1bcda373c2eb596000112

function maxTriSum(n){
    let sum = 0;
    let max = n[0] + n[1] + n[2];
    for(let i = 0; i < n.length - 2; i++){
        for(let j = i + 1; j < n.length - 1; j++){
            for(let k = j + 1; k < n.length; k++){
                sum = n[i] + n[j] + n[k];
                if(sum > max
                    && n[i] !== n[j]
                    && n[j] !== n[k]
                    && n[k] !== n[i]
                ){
                    max = sum;
                }
            }
        }
    }
    return max;
}
