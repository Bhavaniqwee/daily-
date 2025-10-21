let rev=''
let s='rama'
 for(let i of s){
    rev=i+rev
 }
 console.log(rev);

 const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", function(s) {
  let rev = "";
  for (let i of s) {
    rev = i + rev;
  }
  console.log("Reversed:", rev);
  rl.close();
});

