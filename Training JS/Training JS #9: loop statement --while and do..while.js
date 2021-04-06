//https://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str,n){
    let i = 0;
    do {
        if (i % 2){
            str += '*';
        } else {
            str = '*' + str;
        }
        i++;
    } while (i < n);
    return str;
}

//v2
//function padIt(str,n){
//   let i = 1;
//   while(i <= n){
//     if(i % 2 != 0) str = '*' + str;
//     if(i % 2 == 0) str += '*';
//     i++;
//   }
//   return str;
// }

//v3
//function padIt(str,n){
//   let result = str;
//   do {
//     result = "*" + result;
//     n--;
//     if (n>0) {
//       result += "*";
//       n--;
//     }
//   } while (n>0);
//   return result;
// }