let x=[2,8,4,10,3]
function largest(x){
    let max=x[0]
    for(let i of x){
       if(i>max){
           max=i
    }
}
return max
}
console.log(largest(x));
