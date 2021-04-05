//https://www.codewars.com/kata/5601c5f6ba804403c7000004

function barTriang(p1, p2, p3){
    let x0 = (p1[0] + p2[0] + p3[0]) /3;
    let y0 = (p1[1] + p2[1] + p3[1]) /3;
    return [+x0.toFixed(4), +y0.toFixed(4)];
}
