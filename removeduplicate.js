function duplicate(x){
    let out=[];
    for(let i of x){
        if(!out.includes(i)){
            out.push(i)
        }
    }
    return out;
}
y=[1,2,2,3,4,4,5]
res=duplicate(y)
console.log(res)