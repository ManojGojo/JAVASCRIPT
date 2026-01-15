const obj={
    Name: "Manoj",
    age: 22,
    course: "Java Script",
    info:{
        city:"Patan",
        District:"Satara"
    }
}

let {Name,...rest}=obj;


console.log(Name,rest);

let {Name:User}=obj;
console.log(User);

let {info:{city}}=obj;
console.log(city);