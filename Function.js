
//Funtion declaratiion

/*function getData(){
    console.log("Hello Manoj!!");
}

// calling
getData();*/

/*
function getData(Name){
    console.log("Hello Manoj!!");
}

// calling
getData("Manoj");*/
const readlinesync=require("readline-sync");
const min=Number(readlinesync.question("Enter the Valuse of min :"));
const max=Number(readlinesync.question("Enter the Valuse of max :"));

let sum=0;
function calculation(min,max){
    for(let i=min;i<=max;i++){
        sum=sum+i;
    }
    console.log(`The Sum of all digits from ${min} to ${max} is ${sum}`);
}

calculation(min,max);