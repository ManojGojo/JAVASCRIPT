
// let x=10;
// function getDouble(num){
//     return num*2*x;
// }
// console.log(getDouble(5));

//  function append(arr){
//     arr.push(5,6);
//     return arr;
//  }
//  console.log(append([1,2,3,4]));


function append(arr){
    let arr2=[];
    arr2.push(...arr,4,5,6)
    return arr2;
 }
 console.log(append([1,2,3,4]));
 