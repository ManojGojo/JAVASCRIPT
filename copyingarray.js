
/*
let arr1=[1,2,3,4,5];
let arr2=arr1;

arr2.push(6,7,8,9);

console.log("Array1 :",arr1);
console.log("Array2 :",arr2);*/

//spread operator
/*
let arr1=[1,2,3,4,5];
let arr2=[...arr1];

arr2.push(6,7,8,9);

console.log("Array1 :",arr1);
console.log("Array2 :",arr2);*/


let arr1=[1,2,3,4,5];
let arr2=[];
for(let num of arr1){
    arr2.push(num);
}
console.log(arr2);