function primeNum(n) {
    if(n < 2) {
        return `${n} is not a prime number`;
    }

    for (let index = 2; index < n; index++) {
        if(n % index === 0) {
            return `${n} is not a prime number`;
        }
    }

    return `${n} is a prime number`;

}
const nth = 13;
console.log(primeNum(nth));