function max(arr){
    let first=-Infinity;
    let last=Infinity
    for(let i of arr){
        if(i>first){
            first=i
        }
        if(i<last){
            last=i
        }
    }
    console.log(first,last)
}
x=[1,2,45,99,99]
max(x)