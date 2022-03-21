function arrayPartOfThree(N, arr) {

    var first = 0
    var second = 0
    var third = 0
    var a = N / 3
    for (var i = 0; i < a; i++) {
        first += arr[i]
        second += arr[i + a]
        third += arr[i + a + a]
    }
    console.log(4 * first + 5 * second + 6 * third)
}
