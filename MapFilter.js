// const readlinesync=require("readline-sync");
// const p=readlinesync.question("enter the value of power :");

// const arr=[1,2,3,4,5];

// // function power(num){
// //     return num**p;
// // }

// // const result=arr.map(power);
// // console.log(result);

// const result=arr.map((num,index) =>{
//     console.log(index);
//     return num*p;
// });
// console.log(result);


const arr=[1,2,3,4,5,6,7,8,9];

// function filter(arr){
//     let arr2=[];
//     for(let num of arr){
//         if(num>=5){
//             arr2.push(num);
//         }
//     }
//     return arr2;
// }
// const result=filter(arr);
// console.log(result);

const result=arr.filter((num) => num>=5);
console.log(result);