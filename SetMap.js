/*const student=new Array();
student.push(1);
student.push(2);
student.push(1);*/

//console.log(student);
/*
const student=new Set();
student.add(1);
student.add(2);
student.add(1);

console.log({student});*/

/*
const student=[1,2,3,4,5,6];
const newstudent=new Set(student);
console.log({newstudent});*/


//Methods of Set
/*
const newset=new Set();
newset.add(10);
newset.add(15);
newset.delete(10);
//newset.clear();
console.log(newset.entries());
console.log(newset.has(10));
console.log(newset);*/


//Map

const newmap=new Map();

newmap.set(10,"Manoj");
newmap.set(11,"Gojo");
newmap.set(12,"tanjiro");

console.log(newmap);

console.log(newmap.get(12));
newmap.delete(12);
console.log(newmap.size);
console.log(newmap.keys());
console.log(newmap.values());
console.log(newmap);


newmap.forEach((value)=>{
    console.log(value);
})

