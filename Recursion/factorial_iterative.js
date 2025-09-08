function factorial(num){
    let fact=1;
    for (let i=num;i>1;i--){
        fact=fact*i;
        //console.log('fact',fact)
    }
    return fact;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));