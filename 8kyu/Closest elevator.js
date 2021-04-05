//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a

function elevator(left, right, call){
    return (Math.abs(left - call) < Math.abs(right - call)) ? "left" : "right";
}
