//includes
/*
let arr1=["Math","Science","Physics","Chem","Bio"];
const readlinesync=require("readline-sync");
const course=readlinesync.question("Enter the course that you want to pick from :");


const availablecourse=arr1.includes(course);
if(!availablecourse){
    console.log(`${course} is currently unavailable!!`);
}
else{
    console.log(`${course} is available!!!!!`);
}*/

//Array sort
/*
let fruits=["Apple","Mango","Banana","Chickoo","Watermelon"];
fruits.sort();
console.log(fruits);*/

/*
let num=[1,2,3,4,5,6,7,8,9,0,11,61,31,51];

function call(a,b){
    return a-b;
}
num.sort(call);
console.log(num);*/


//split and join

const readlinesync=require("readline-sync");
const str1=readlinesync.question("Enter the word :");


const var1=str1.split("");
console.log(var1);
console.log(var1.reverse());
let var2=(var1.join(""));
console.log(var2);

if(var2==str1){
    console.log(`${str1} is a Palindrom`);
}
else{
    console.log(`${str1} is not a Palindrome!!!`);
}