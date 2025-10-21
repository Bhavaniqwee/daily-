n=5
f=1
for(let i=1;i<=n;i++){
    f=f*i
}
console.log(f)


n=5
f=1
while(n>0){
    f=f*n
    n=n-1
}
console.log(f)

function fact(n){
    if(n===0){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))