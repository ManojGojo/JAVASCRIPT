/*
let fruits=["Apple","Mango","Banana"];

fruits.push("Orange");
console.log(fruits);
fruits.push("Strawberry","Watermelon","Chikko");
console.log(fruits);
*/

//concat method
/*
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,0];
let arr3=[11,12,13,14,15];
let arr4=[16,17,18,19,20];

//const arr3=arr1.concat(arr2);
console.log(arr1.concat(arr2,arr3,arr4));*/

//pop, slice, splice
/*
let fruits=["Apple","Mango","Banana","Chickoo","Watermelon"];
console.log("Fruits :" , fruits);
let popped= fruits.pop();
console.log(popped);
console.log("Fruits :", fruits);

*/
/*/
let fruits=["Apple","Mango","Banana","Chickoo","Watermelon"];

console.log(fruits.slice(3,4));
console.log(fruits);*/

//splice

let fruits=["Apple","Mango","Banana","Chickoo","Watermelon"];

fruits.splice(0,3);
fruits.splice(0,0,"PineApple","Guava");
console.log(fruits);