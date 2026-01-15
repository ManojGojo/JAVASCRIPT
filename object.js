// const obj={
//     name:"Manoj Deshmukh",
//     getmessage:function(){
//         console.log("Hello Welcome");
//     },
//     hello(){
//         console.log("Hello Manoj");
//     }
// }
// obj.getmessage();
// obj.hello();
// console.log(obj);

//Computed Property

const readlinesync=require("readline-sync");
const key=readlinesync.question("What you want to know : ");
const obj={
    name:"Manoj",
    age:22,
}

obj.village="Paparde";
obj.state="Maharastra";
console.log(obj[key]);