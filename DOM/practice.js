/* function sum(x){
    let s=0
    for(let i of x){
        s=s+i;
    }
    return s;
}
let x=[1,2,3,4,5]
let res=sum(x)
console.log(res); 
 function largest(x){
    let max=0;
    for(let i of x){
        if(i>max){
            max=i
        }
    }
    return max;
 }
 x=[10,20,5,90,56]
 let res=largest(x)
 console.log(res) 
  function specific(x){
    let ele=2
    let cnt=0
    for(let i of x){
        if(i===ele){
           cnt++
        }
    }
    return cnt
  }
  x=[1,2,3,2,2,4]
  let res=specific(x)
  console.log(res) 
  

  function duplicate(x){
    let out=[]
    for(let i of x){
        if(!out.includes(i)){
                out.push(i)
        }
    }
    return out
  }
  x=[1,2,2,3,4,4]
  let res=duplicate(x)
  console.log(res)
  
  
  function reverse(x){
    let rev=[]
    for(let i=x.length-1;i>=0;i--){
        rev.push(x[i]);
    }
    return rev
  }
  x=[10,20,30,40,50]
  res=reverse(x)
  console.log(res)
 
 function reverse(x){
    let rev=[]
    for(let i=0;i<x.length;i++){
        rev.push(x[i]);
    }
    return rev
  }
  x=[10,20,30,40,50]
  res=reverse(x)
  console.log(res) */


  function sorted(x){
    let out=[];
    for(let i=0;i<x.length;i++){
        for(let j=i+1;j<x.length;j++){
            if(x[i]<x[j]){
                x[i],x[j]=x[j],x[i]
            }
        }
       

    }
    return x
    }
    x=[3,1,5,2,4]
    res=sorted(x)
    console.log(res)
/* function sorted(x){
    let out=[];
    out=sorted(x)
    }
    x=[3,1,5,2,4]
    res=sorted(x)
    console.log(res) */
x=[3,1,5,2,4]
res=sorted(x)
console.log(res)