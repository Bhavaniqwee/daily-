function LCM(n1,n2){
    if(n1>n2){
        greater=n1
    }
    else{

        
        greater=n2
    }
    while (true){
        if (greater%n1===0 && greater%n2===0){
            console.log(greater)
            break;
        }
        greater++;
    }
}
LCM(12,6)