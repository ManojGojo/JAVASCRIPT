const readlinesync = require('readline-sync');
const num = Number((readlinesync.question('Enter a number: ')));

if(num%2===0){
    console.log(`${num} is an even number`);
    if(num%4===0){
        console.log(`${num} is divisible by 4`)
    }else{
        console.log("Tjis is not divisible by 4");
        
    }
}
else{
    console.log(`${num} The num is neither divisible by 4 nor an even number`);
    if(num%5===0){
        console.log(`${num} is divisible by 5`)
    }
    else{
        console.log(`${num} is also not didvisible by 5`);
    }
}