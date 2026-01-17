// function calculate(){
//     arguments[0]=10;
//     console.log(arguments);
// }
function calculate(){
    let sum=0;
    for(let num of arguments){
        sum=sum+num;
    }
    console.log(sum);
}
calculate(1,2,3,4,5,6,7,8,9);
