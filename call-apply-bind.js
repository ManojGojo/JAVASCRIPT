const user1={
    Name:"Manoj",
    age:22,
  
}

const user2={
    Name:"Anna",
    age:23,
    
}

const user3={
    Name:"Tatya",
    age:25,
   
}

function sayHi(course,year){
    console.log(this.Name,course,year);
}

sayHi.call(user1,"AIDS",2023);
sayHi.call(user2);
sayHi.call(user3);

sayHi.apply(user1,["AIDS",2023]);