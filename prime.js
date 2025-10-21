/* let n=22;
let d=2;
while(d<=n/2){
    if (n%d===0){
        console.log(false);
    }
    d++;
}
 console.log(true); */
    
    
function isprime(n){
    if (n<2){
        return false;
    }
    let d=2;
    while(d<=n/2){
        if (n%d===0){
            return false;
        }
        d++;
    }
    return true;

}
let res=isprime(22)
console.log(res)