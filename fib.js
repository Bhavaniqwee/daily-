function fib(n){
    a=0
    b=1
    result=[a,b]
    i=1
    while (i<=n-2){
        c=a+b
        result.push(c)
        a=b
        b=c
        i++;
    }
    return result;
}
console.log(fib(10))



function fib(n){
    a=0
    b=1
    result=[a,b]
    i=1
    while (i<=n-2){
        c=a+b
        result.push(c)
        a=b
        b=c
        i++;
    }
    console.log(result.join(' '))
}
fib(10)