function max(arr){
    let first=-Infinity;
    let second=-Infinity;
    for(let i of arr){
        if(i>first){
            second=first
            first=i
        }
        else if(i>second && i!=first){
            second=i
        }
    }
    return second
}
x=[1,2,45,99,99]
console.log(max(x))