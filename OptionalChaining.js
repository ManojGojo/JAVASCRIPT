const obj={
    name: "Manoj",
    age: 22,
    course: "Java Script",
    info:{
        city:"Patan",
        District:"Satara"
    },
    getData:function(){
       console.log("Welcome Manoj!!");
    }
}
//Sol 1

if(obj.info !== undefined){
    console.log(obj.info.city);
}
else{
    console.log("The object is not defined");
}

//Sol 2
console.log(obj.info?.city);
obj.getData();