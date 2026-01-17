 function calculate(num){
    if(num==1){
        return num;
    }
    return num+calculate(num-1);
 } 
 let result=calculate(10);
 console.log(result);