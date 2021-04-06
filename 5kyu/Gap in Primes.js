//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4

function gap(g, m, n) {
    const isPrime = p => {
        const k = () => {
            for (let i = 3; i <= Math.sqrt(p); i += 2)
                if (p % i === 0)
                    return false;
            return true;
        }
        return p === 2 ? true : p < 2 || p % 2 === 0 ? false : k();
    }

    let cPrime;
    for(let i = 0; i < (n - m); i++){
        if(!isPrime(m + i))
            continue;
        if( (m + i) - cPrime === g )
            return [cPrime, (m + i)];
        cPrime = (m + i);
    }
    return null;
}
