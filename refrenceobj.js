const obj={
    name:"Manoj",
    age:22,
    info:{
        city:"patan",
        District:"Satara"
    }
}

// console.log(obj);

// const obj2=obj;
// obj2.name="venky";

// console.log(obj);
// console.log(obj2);

const obj2=Object.assign({},obj);

obj2.name="Anna";
obj2.info.city="Karad";
console.log(obj);
console.log(obj2);

//When we have nested object it also create shallow copy[Object.assign()]
