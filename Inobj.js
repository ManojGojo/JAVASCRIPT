const obj={
    name: "Manoj",
    age: 22,
    course: "Java Script",
    village: "Paparde"
}
if("name" in obj){
    console.log("The name property is found");
}
else{
    console.log("The name does not exist");
}
for( let item in obj){
    console.log(item, obj[item]);
}