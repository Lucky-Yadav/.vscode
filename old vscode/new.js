// recursion
// var arr =0;
function fib(n){
    if (n<=1){
    return n
}
    // console.log(n)
    // arr =arr + n
    return fib(n-1) + fib(n-2)
}
console.log(fib(6))
// console.log(arr)
