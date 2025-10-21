function leap(y){
    if((y%100===0 && y%400===0) || (y%100!==0 && y%4===0)){
        console.log("Leap year")
    }
    else{
        console.log("not leap year")
    }
}
leap(2022)
