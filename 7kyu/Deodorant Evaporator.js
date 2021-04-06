//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

function evaporator(content, evap_per_day, threshold){
    let n = 0;
    let limit = content * threshold / 100;
    while(content > limit){
        content = content - content / 100 * evap_per_day;
        n++;
    }
    return n;
}
