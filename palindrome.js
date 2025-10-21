//logic 1
let s='madam'
let out=''
for(let i of s){
    out=i+out

}
if(s==out){
    console.log('palindrome');
}
else{
    console.log('not palindrome');
}
//Logic 2

function palindrome(s){
    let rev=s.split("").reverse().join("")
    return rev
}
s='bhavani'
let rev1=palindrome('bhavani')
if (rev1==s){
    console.log('palindrome')

}
else{
    console.log('not palindrome')
}


s='hai'
let rev=s.split("").reverse().join("")
console.log(rev)
//Logic 3
s='bhavani'
rev=''
for (let i=s.length-1;i>=0;i--){
    rev+=s[i]

}
console.log(rev)