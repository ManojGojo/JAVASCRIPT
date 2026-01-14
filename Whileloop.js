/*let i=0;
while(i<10){
    console.log(i);
    i++;
}*/

/*
let i=0;
do{
 console.log(i);
 i++;
}
while(i<10);*/



const readlinesync=require("readline-sync");
let input=readlinesync.question("Enter a number less than 50 :");

while(input>50){
     input=readlinesync.question("Enter a number less than 50 :");

}
console.log("Number accepted");