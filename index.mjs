// import modules from "./utils.js";
// print(greeting("Manoj!!"));



// const {print,greeting}=require("./utils.js");

// print(greeting("Manoj!!"));

// import {userData,display} from "./file.mjs";
// const var1=display(userData("Manoj"));
// console.log(var1);

const ismath =true;
if(ismath){
    const {addition}=await import("./maths.mjs");
    console.log(addition(10,22));
}
