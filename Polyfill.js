//My Map
//  const arr=[1,2,3,4,5,6,7,8];

// function squareNumber(number){
//         return number**2;
// }

// Array.prototype.myMap=function(callback){
//     let arr1=[];
//     for(let i=0;i<this.length;i++){
//         arr1.push(callback(this[i], i ,this));
//     }
//     return arr1;
// }

// const square=arr.myMap(squareNumber);
// console.log(square);


// function getFilter(number) {
//     return number > 4;
// }

// Array.prototype.myFilter = function (callback) {
//     let arr1 = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             arr1.push(this[i]); // push element, not callback result
//         }
//     }
//     return arr1;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const filter = arr.myFilter(getFilter);
// console.log(filter);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];


// function getSum(acc,cur){
//     return acc+cur;
// }
// Array.prototype.myReduce=function(callback,initial){
//     let acc=initial?initial:this[0];
//     for (let i=initial ? 0: 1 ;i<this.length; i++){
//         acc=callback.call(this,acc,this[i],this);
//     }
//     return acc;
// }

// const total=arr.myReduce(getSum);
// console.log(total);


// const arr=[1,2,3,4,[5,6],[[7,8]]];
  
// Array.prototype.myFlat= function(depth=1){
//     let arr2=[];
//     function flatElement(array,depth){
//         for(let element of array){
//             if(Array.isArray(element)){
//                 flatElement(element,depth-1)

//             }
//             else{
//                 arr2.push(element);
//             }
//         }
//     }
//     flatElement(this,depth);
//     return arr2;
// }

// const result=arr.myFlat();
// console.log(result);
