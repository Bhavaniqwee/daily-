function flatten(x){
    let arr=[]
    for(let i of x){
        if(typeof(i)=='object'){
            arr=arr.concat(flatten(i))
        }
        else{
            arr.push(i)
            
        }
    }
    return arr
} 
y=[[1,2],3,[4,5,[6,7]]]
console.log(flatten(y)) 



let y = [[1,2], 3, [4,5,[6,7]]];
let flat = y.flat(Infinity);
console.log(flat);  // [1,2,3,4,5,6,7]




let arr=[1,2,3,4,5]
console.log(typeof(arr))
let o={'name':'Bhavani'}
console.log(typeof(o))