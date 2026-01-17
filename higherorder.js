//A funtion that accepts another function as an argument or return a funtion or does both is called as h.o.f

// function User(){
//     return "Welcome Manoj";
// }

// function greet(User){
//     console.log("Hello how are you",User());
// }

// console.log(greet(User));

// function display(){
//     return function(){
//         console.log("This is the inner function");
//     }
// }
// display()();
const readlinesync=require("readline-sync");
const p=readlinesync.question("enter the value of power :");

const arr=[1,2,3,4,5];

function power(num){
    return num**p;
}


function Calculate(inner,arr){
    let arr2=[];
    for(let num of arr){
        arr2.push(inner(num));
    }
    return arr2;
}

let result=Calculate(power,arr);
console.log(result);
