//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, v1, v2)
{
    switch(operation){
        case '+' :
            return  v1 + v2;
        case '-' :
            return v1 - v2;
        case '*' :
            return v1 * v2;
        case '/' :
            return v1 / v2;
    }
}
