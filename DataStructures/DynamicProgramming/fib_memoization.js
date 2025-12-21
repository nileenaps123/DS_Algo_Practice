function fib(n,memo=[undefined,1,1]){
    if(memo[n]!==undefined) return memo[n];
    let res=fib(n-1,memo)+fib(n-2,memo);
    memo[n]=res;
    return res;
}

console.log(fib(3));
console.log(fib(6));



// f(5,m)
//f(4,m)
//f(3,m)
//1
//1