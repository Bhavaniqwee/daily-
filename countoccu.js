function count(s){
    d={}
    for(let i of s){
        if(i in d){
            d[i]+=1
        }else{
            d[i]=1
        }

    }
    return d;
}
let s='banana'
console.log(count(s));
99,63,84,34,13,1,79,80,89,3,129,15,110,106,112,113,4,86,90,91