//https://www.codewars.com/kata/584c702256c98fc0a0000043

const fizzBuzz = n => {
    return n % 15 === 0 ? 'FizzBuzz' :
        n % 5 === 0 ? 'Buzz' :
            n % 3 === 0 ? 'Fizz' :
                n;
}
