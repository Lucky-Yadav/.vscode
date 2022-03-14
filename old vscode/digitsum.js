function solve(n) {

    if (n % 10 == n) {
        return n
    }
    // n=n/10
    return (n%10) + solve(parseInt(n / 10))
}

console.log(solve(1234))
