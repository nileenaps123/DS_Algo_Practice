// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if (n <= 2){
        console.log('n',n)
        return 1;
    } 
    return fib(n-1) + fib(n-2);
}


  //0,1, 1, 2, 3, 5, 8, 
  //1, 1, 2, 3, 5, 8, 

console.log(fib(2))