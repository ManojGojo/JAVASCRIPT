// const myFunction= function(){
//     console.log("Hello Manoj");
// }
// myFunction();

// function User(){
//     return "Manoj";
// }

// function welCome(inner,greeting){
//     console.log(greeting,inner());

// }
// welCome(User,"Hello How are you?");

function greet(){
    function User(){
        let Name="Manoj";
        console.log(Name,"Welcome To VS CODE!!!");
    }
    return User;
}
// const result=greet();
// console.log(result());
greet()();